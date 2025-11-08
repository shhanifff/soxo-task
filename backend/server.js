import express, { json } from "express";
import router from "./Routes.js";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
const PORT = 1001;

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://sukun555:3EmUbYdaOsOydMtY@cluster0.qigrcti.mongodb.net/users"
  )
  .then(() => {
    console.log("DB Connection Done");
  })
  .catch((error) => {
    console.log("DB Connection Failed", error);
  });

app.use("/api", router);

app.listen(PORT, () => {
  console.log("Server is Listening", PORT);
});
