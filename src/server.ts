require("dotenv").config();
import express from "express";
import cors from "cors";
import fileRetrieverRouter from "./router/fileRetrieverRouter";

const app = express();

app.disable("x-powered-by");
app.use(cors());

app.use("/file", fileRetrieverRouter);

export function startServer() {
  app.listen("3000", function serverResponse() {
    console.log("Server is on localhost:3000");
  });
}
