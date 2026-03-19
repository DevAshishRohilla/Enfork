import { createClient } from "@supabase/supabase-js";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;
const resendApiKey = process.env.RESEND_API_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error("Missing Supabase environment variables");
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function sendNotification(email: string) {
  if (!resendApiKey) {
    console.error("⚠️  RESEND_API_KEY not configured - email notifications disabled");
    console.error("   To fix: Add RESEND_API_KEY to Vercel environment variables");
    return;
  }

  if (!process.env.ADMIN_EMAIL) {
    console.error("⚠️  ADMIN_EMAIL not configured - newsletter email won't be sent");
    console.error("   To fix: Add ADMIN_EMAIL to Vercel environment variables");
    return;
  }

  try {
    const fromEmail = process.env.RESEND_FROM_EMAIL || "Newsletter <onboarding@resend.dev>";
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: process.env.ADMIN_EMAIL,
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
      console.error("❌ Resend API error:", error);
      throw new Error(`Resend failed: ${JSON.stringify(error)}`);
    }
    
    console.log("✅ Newsletter notification sent successfully to", process.env.ADMIN_EMAIL);
  } catch (error) {
    console.error("❌ Email sending error:", error);
  }
}

export default async (req: VercelRequest, res: VercelResponse) => {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    const { error } = await supabase
      .from("newsletter_subscriptions")
      .insert([{ email }]);

    if (error) {
      console.error("Supabase error:", error);
      return res.status(500).json({ error: "Failed to store subscription" });
    }

    await sendNotification(email);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("API error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
