import express from "express";
import html from "./html";
import { renderToString } from "react-dom/server";
import React from "react";
import Me from "../pages/Me";

const port = process.env.PORT || 3000;
const server = express();

server.use(express.static("dist/client"));

server.get("/", (req, res) => {
  const body = renderToString(React.createElement(Me));
  console.log("req", req.method, req.url);
  res.send(html(body));
});

server.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);
