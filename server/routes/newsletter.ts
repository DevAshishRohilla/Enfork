import { Router, Request, Response } from "express";
import { pool } from "../db";

const router = Router();

async function sendNotification(email: string) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const adminEmail = process.env.ADMIN_EMAIL;

  if (!resendApiKey || !adminEmail) {
    console.error("⚠️  RESEND_API_KEY or ADMIN_EMAIL not configured — email skipped");
    return;
  }

  const fromEmail = process.env.RESEND_FROM_EMAIL || "Newsletter <onboarding@resend.dev>";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${resendApiKey}`,
    },
    body: JSON.stringify({
      from: fromEmail,
      to: adminEmail,
      subject: "New Newsletter Subscription",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Newsletter Subscriber</h2>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          </div>
          <p style="color: #666; font-size: 12px;">
            This notification was sent from your Enfork newsletter form.
          </p>
        </div>
      `,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Resend error: ${JSON.stringify(error)}`);
  }

  console.log("✅ Newsletter notification sent to", adminEmail);
}

router.post("/", async (req: Request, res: Response) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  try {
    await pool.execute(
      "INSERT INTO newsletter_subscriptions (email) VALUES (?)",
      [email]
    );

    await sendNotification(email);

    return res.status(200).json({ success: true });
  } catch (error: any) {
    // Handle duplicate email (MySQL error 1062)
    if (error.code === "ER_DUP_ENTRY") {
      return res.status(409).json({ error: "Email already subscribed" });
    }
    console.error("Newsletter route error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
