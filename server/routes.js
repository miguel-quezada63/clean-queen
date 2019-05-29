const path = require("path");
const form = require("./form");

exports.appRoutes = function(app) {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
  });
  app.post("/form", (req, res) => {
    form.postForm(req, res);
  });
};
