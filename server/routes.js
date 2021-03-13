const path = require("path");
const form = require("./form");

exports.appRoutes = function (app) {
  app.get("/", (_, res) => {
    res.sendFile(path.join(__dirname, "../public"));
  });
  app.post("/form", (req, res) => {
    form.postForm(req, res);
  });
};
