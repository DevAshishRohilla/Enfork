import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import contactRouter from "./routes/contact";
import newsletterRouter from "./routes/newsletter";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// CORS — restrict to your domain in production
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

// API routes
app.use("/api/contact", contactRouter);
app.use("/api/newsletter", newsletterRouter);

// Serve React frontend (Vite build output)
const distPath = path.join(__dirname, "../dist");
app.use(express.static(distPath));

// SPA fallback — all non-API routes return index.html
app.get(/^(?!\/api).*/, (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
