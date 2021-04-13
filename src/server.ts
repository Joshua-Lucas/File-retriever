import express from "express";

export const app = express();

app.get("/", function (req, res) {
  return res.send({ message: "Hello World" });
});

export function startServer() {
  app.listen("3000", function serverResponse() {
    console.log("Server is on localhost:3000");
  });
}
