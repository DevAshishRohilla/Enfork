import { Router, Request, Response } from "express";
import { pool } from "../db";

const router = Router();

async function sendEmail(
  email: string,
  firstName: string,
  lastName: string,
  message: string
) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const adminEmail = process.env.ADMIN_EMAIL;

  if (!resendApiKey || !adminEmail) {
    console.error("⚠️  RESEND_API_KEY or ADMIN_EMAIL not configured — email skipped");
    return;
  }

  const fromEmail = process.env.RESEND_FROM_EMAIL || "Contact Form <onboarding@resend.dev>";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${resendApiKey}`,
    },
    body: JSON.stringify({
      from: fromEmail,
      to: adminEmail,
      reply_to: email,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Message:</strong></p>
            <p style="background-color: white; padding: 10px; border-left: 4px solid #007bff;">
              ${message.replace(/\n/g, "<br>")}
            </p>
          </div>
          <p style="color: #666; font-size: 12px;">
            This email was sent from your Enfork contact form.
          </p>
        </div>
      `,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Resend error: ${JSON.stringify(error)}`);
  }

  console.log("✅ Contact email sent to", adminEmail);
}

router.post("/", async (req: Request, res: Response) => {
  const { firstName, lastName, email, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  try {
    await pool.execute(
      "INSERT INTO contact_submissions (first_name, last_name, email, message) VALUES (?, ?, ?, ?)",
      [firstName, lastName, email, message]
    );

    await sendEmail(email, firstName, lastName, message);

    return res.status(200).json({ success: true, message: "Form submitted successfully" });
  } catch (error) {
    console.error("Contact route error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
