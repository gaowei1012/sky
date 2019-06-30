/**
 * react ssr server render
 */

import fs from "fs";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Containers from "./../containers";

const serverRender = (req, store, context) => {
  const template = fs.readFileSync(
    process.cwd() + "/public/static/index.html",
    "utf8"
  );
  const vendorCss = fs.readFileSync(
    process.cwd() + "/public/static/css/vendors.css",
    "utf8"
  );

  const content = renderToString(
    <StaticRouter location={req.path} context={context}>
      <Containers />
    </StaticRouter>
  );

  const cssStr = context.css.length ? context.css.join("\n") : "";

  return template
    .replace("<!--app-->", content)
    .replace("server-render-css", cssStr + vendorCss);
};

export default serverRender;
