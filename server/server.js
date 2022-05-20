import fs from "fs";
import path from "path";

import express from "express";

import React from "react";

import { renderToString } from "react-dom/server";

import App from "../src/App";

const PORT = 3030;

const app = express();

app.use("/", (req, res, _) => {
  fs.readFile(
    path.resolve("build", "index.html"),
    { encoding: "utf-8" },
    (err, data) => {
      if (err) return console.error(err);
      console.log(data);
      res
        .status(200)
        .send(
          data.replace(
            '<div id="root"></div>',
            `<div id="root">${renderToString(<App />)}</div>`
          )
        );
    }
  );
});

app.listen(PORT, () => {
  console.log(`React running on port ${PORT}`);
});
