import React from "react";
import fs from "fs";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Container from "../containers";

const serverRender = (req, store, context) => {
  const template = fs.readFileSync(
    process.cwd() + "/public/index.html",
    "utf8"
  );
  const vendorCss = fs.readFileSync(
    process.cwd() + "/public/css/vendors.css",
    "utf8"
  );
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <Container />
      </StaticRouter>
    </Provider>
  );
  const cssStr = context.css.length ? context.css.join("\n") : "";
  const state = JSON.stringify(store.getState())
    .replace(/<script/g, "%%script%%")
    .replace(/<\/script/g, "%%/script%%");
  const initialState = `
    window.context = {
      INITIAL_STATE: ${state}
    }
`;
  return template
    .replace("<!--app-->", content)
    .replace("server-render-css", cssStr + vendorCss)
    .replace("/*initial-state*/", initialState);
};

export default serverRender;
