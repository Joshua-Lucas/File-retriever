require("dotenv").config();
import express from "express";
import cors from "cors";
import fileRetrieverRouter from "./router/fileRetrieverRouter";
import authRouter from "./router/authRouter";

const app = express();

app.disable("x-powered-by");
app.use(cors());

app.use("/html", authRouter);
app.use("/getFile", fileRetrieverRouter);

export function startServer() {
  app.listen("3000", function serverResponse() {
    console.log("Server is on localhost:3000");
  });
}
