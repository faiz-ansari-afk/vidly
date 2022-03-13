// import Raven from "raven-js";
function init() {
  // Raven.config(
  //   "https://aa3e649b7cfd43dd8e435c032f173e2a@o1164191.ingest.sentry.io/6253119",
  //   {
  //     release: "1.0.0",
  //     environment: "development-test",
  //   }
  // ).install();
}
function log(error) {
  console.log(error)
  // Raven.captureException(error);
}
export default {
  init,
  log,
};
