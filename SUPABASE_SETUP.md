# Supabase Setup Guide

This guide will help you set up Supabase for your contact form and future blog system.

## Step 1: Create a Supabase Account & Project

1. Go to https://supabase.com
2. Click "Start your project"
3. Sign up with GitHub or email
4. Create a new organization (or use existing)
5. Create a new project:
   - **Name:** enfork
   - **Database Password:** Create a strong password
   - **Region:** Choose closest to your users
   - Click "Create new project" (takes 2-5 minutes)

## Step 2: Get Your Credentials

Once your project is created:

1. Go to **Settings** → **API** (left sidebar)
2. Copy these values:
   - **Project URL** → `VITE_SUPABASE_URL`
   - **Anon Key** (under "Project API keys") → `VITE_SUPABASE_ANON_KEY`
   - **Service Role Key** → `SUPABASE_SERVICE_KEY` (needed for Vercel)

## Step 3: Create Database Tables

1. Go to **SQL Editor** in Supabase dashboard
2. Create a new query and paste this SQL:

```sql
-- Create contact_submissions table
CREATE TABLE contact_submissions (
  id BIGSERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status VARCHAR(50) DEFAULT 'new'
);

-- Add indexes for faster queries
CREATE INDEX idx_contact_email ON contact_submissions(email);
CREATE INDEX idx_contact_created_at ON contact_submissions(created_at);

-- Create blog_posts table (for future use)
CREATE TABLE blog_posts (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image VARCHAR(255),
  author VARCHAR(255) NOT NULL,
  published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  published_at TIMESTAMP WITH TIME ZONE
);

-- Add indexes for blog
CREATE INDEX idx_blog_slug ON blog_posts(slug);
CREATE INDEX idx_blog_published ON blog_posts(published);
CREATE INDEX idx_blog_created_at ON blog_posts(created_at);

-- Enable RLS (Row Level Security)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policies for public access
CREATE POLICY "Anyone can insert contact submissions" ON contact_submissions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can read published blog posts" ON blog_posts
  FOR SELECT USING (published = true);
```

3. Click "Run" to execute the SQL

## Step 4: Update Environment Variables

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and add your credentials:
   ```
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   ```

## Step 5: Set Up Vercel Environment Variables

1. Go to your Vercel project: https://vercel.com/dashboard
2. Go to **Settings** → **Environment Variables**
3. Add these variables:
   - `SUPABASE_URL`: Your project URL
   - `SUPABASE_SERVICE_KEY`: Your service role key (keep this SECRET!)
4. Click "Save"

## Step 6: Test Locally

```bash
npm run dev
```

1. Navigate to the Contact page
2. Fill out the form and submit
3. Check Supabase dashboard → **Table Editor** → `contact_submissions`
4. You should see your submission!

## Optional: Enable Email Notifications

To send emails when someone submits a form or newsletter signup, use **Resend** (free):

### Setup Resend:
1. Go to https://resend.com and sign up
2. Verify your domain or use Resend's test domain (`onboarding@resend.dev`)
3. Get your **API Key** from the dashboard

### Add to Vercel Environment Variables:
Go to **Settings** → **Environment Variables** and add:
- `RESEND_API_KEY`: Your API key from Resend
- `RESEND_FROM_EMAIL`: Your verified sender email (e.g., `Newsletter <noreply@yourdomain.com>` or `Newsletter <onboarding@resend.dev>`)
- `ADMIN_EMAIL`: Email that receives notifications (e.g., `your.email@example.com`)

**Important:** Without these variables, emails will silently fail to send!

## For Future: Blog Management

When ready to build the blog:

1. Create a blog admin page (password protected)
2. Query `blog_posts` table to display published posts
3. Use Markdown or rich text for content
4. Images can be stored in Supabase Storage

## Useful Supabase Links

- **Dashboard:** https://app.supabase.com
- **Database Tables:** Settings → API → Schemas
- **Row Level Security:** Auth → Policies
- **Storage:** For file uploads (images, videos)
- **Documentation:** https://supabase.com/docs

## Troubleshooting

**"Missing Supabase environment variables"**
- Make sure `.env.local` has both `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
- Restart dev server after adding `.env.local`

**"API submission fails"**
- Check Vercel function logs: https://vercel.com → Project → Functions
- Ensure `SUPABASE_URL` and `SUPABASE_SERVICE_KEY` are set in Vercel

**"Table doesn't exist"**
- Re-run the SQL schema in Supabase SQL Editor
- Ensure no SQL errors (check output)

---

**Next Steps:**
- Set up email notifications (optional)
- Create blog admin interface
- Add authentication for blog management
