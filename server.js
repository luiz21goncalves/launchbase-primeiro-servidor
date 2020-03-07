const express = require ("express");
const nunjunks = require("nunjucks");

const server = express();
const courses = require("./data");

server.use(express.static("public"));

server.set("view engine", "njk");

nunjunks.configure("views", {
  express: server,
  noCache: true,
});

server.get("/", function(req, res) {
  return res.render("about");
});

server.get("/courses", function(req, res) {
  return res.render("courses", { courses });
});

server.get("/courses/:id", function(req, res) {
  const id = req.params.id;

  for (let course of courses) {
    if (course.id == id) {
      return res.render("description", { course },);
    }
  }

  return res.render("not-found");

});


server.use(function(req, res) {
  res.status(404).render("not-found");
});

server.listen(5000, function() {
  console.log("server is running");
});