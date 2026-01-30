import express from "express";
import dotenv from "dotenv";
import authUser from "./routes/auth.route.js";
import connectDB from "./lib/db.js";
import userRoute from "./routes/auth.user.js";
import cookieParser from "cookie-parser";
import postRoute from "./routes/post.route.js";
import notificationsRoute from "./routes/notification.route.js";
import cors from "cors";
dotenv.config();
const app = express();

const port = process.env.PORT || 3000;
app.use(express.json());
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
