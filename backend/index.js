import express from "express";
import dotenv from "dotenv";
import authUser from "./routes/auth.route.js";
import connectDB from "./lib/db.js";
import userRoute from "./routes/auth.user.js";
import cookieParser from "cookie-parser";
import postRoute from "./routes/post.route.js";
import notificationsRoute from "./routes/notification.route.js";
import { v2 as cloudinary } from "cloudinary";
import cors from "cors";
dotenv.config();
console.log("CLOUDINARY_CLOUD_NAME:", process.env.CLOUDINARY_CLOUD_NAME);
console.log("CLOUDINARY_API_KEY:", process.env.CLOUDINARY_API_KEY);
console.log("CLOUDINARY_API_SECRET:", process.env.CLOUDINARY_API_SECRET);

const app = express();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const port = process.env.PORT || 3000;
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true, limit: "20mb" }));
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authUser);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/notifications", notificationsRoute);
app.listen(port, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${port}`);
});
