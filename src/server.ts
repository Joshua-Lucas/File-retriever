import express from "express";
import fileRetrieverRouter from "./router/fileRetrieverRouter";

const app = express();

app.disable("x-powered-by");

app.use("/file", fileRetrieverRouter);

export function startServer() {
  app.listen("3000", function serverResponse() {
    console.log("Server is on localhost:3000");
  });
}
