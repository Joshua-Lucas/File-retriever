import express from "express";
import fileRetrieverRouter from "./router/fileRetrieverRouter";

const app = express();

// app.get("/", function (req, res) {
//   return res.send({ message: "Hello " });
// });

app.use("/file", fileRetrieverRouter);

export function startServer() {
  app.listen("3000", function serverResponse() {
    console.log("Server is on localhost:3000");
  });
}
