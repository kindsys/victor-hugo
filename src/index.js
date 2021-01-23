// JS Goes here - ES6 supported

import "./scss/application.scss";
import "./images/index";

// stimulus js
import "@stimulus/polyfills";
import {Application} from "stimulus";
import {definitionsFromContext} from "stimulus/webpack-helpers";

function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(require.context("./js/modules", true, /\.js$/));

const application = Application.start();
const context = require.context("./js/controllers", true, /\.js$/);

application.load(definitionsFromContext(context));
