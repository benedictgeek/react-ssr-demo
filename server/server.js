import fs from "fs";
import path, { dirname } from "path";

import express from "express";

import React from "react";

import { renderToString } from "react-dom/server";

import App from "../src/App";

const PORT = 3030;

const app = express();


app.use("^/app$", (req, res, _) => {
  fs.readFile(
    path.resolve("build", "index.html"),
    { encoding: "utf-8" },
    (err, data) => {
      if (err) return console.error(err);
      const page = data.replace(
        '<div id="root"></div>',
        `<div id="root">${renderToString(<App />)}</div>`
      );
    //   console.log(page);
      res.status(200).send(page);
    }
  );
});

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.listen(PORT, () => {
  //   console.log(path.join(__dirname, "build"));
  console.log(`React running on port ${PORT}`);
});
