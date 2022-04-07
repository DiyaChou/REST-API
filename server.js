import express from "express";
import mongoose from "mongoose";
import "dotenv/config.js";
import { router } from "./routes/subscribers.js";

const app = express();
app.use(express.json());
const subscribersRouter = router;

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use("/subscribers", subscribersRouter);


app.listen(3000, () => console.log("server started"));
