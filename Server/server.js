import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import userRouter from "./route/userRoutes.js";
import imageRouter from "./route/imageRoute.js";

const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
    credentials: true,
  };
  
app.use(cors(corsOptions));
// app.use(cors(corsOptions));
await connectDB();

app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);

app.get("/", (req, res) => res.send("API Working"));

app.listen(PORT, () => console.log(`Server Running on ${PORT}`));

//http://localhost:400/api/user/register
//http://localhost:400/api/user/login
