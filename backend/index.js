import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './utils/connectDb.js';
import tattooRoute from "./router/tatto.route.js";
import nodemailer from 'nodemailer';

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

const corsOption = {
  origin: [process.env.frontend_Url],
  credentials: true,
};
app.use(cors(corsOption));

// Default route
app.get("/", (req, res) => {
  res.send({ name: "amit" });
});

// Tattoo routes
app.use("/tattoo", tattooRoute);

// Contact email route
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.MAIL_USER,
      subject: `Tattoo Inquiry from ${name}`,
      text: `Phone: ${phone || "N/A"}\n\n${message}`,
    });

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ message: "Failed to send email." });
  }
});

// Server listener
app.listen(5000, () => {
  connectDb();
  console.log("Server is listening on port 5000");
});
