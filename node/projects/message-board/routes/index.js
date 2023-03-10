const express = require("express");

const router = express.Router();

const messages = [
  {
    text: "Hello World!",
    user: "Mohamed",
    added: new Date(),
  },
  {
    text: "Bye World",
    user: "Omar",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Message Board", messages });
});

router.post("/new", (req, res, next) => {
  if (req.body.name && req.body.message) {
    messages.push({
      user: req.body.name,
      text: req.body.message,
      added: new Date(),
    });
  }
  res.redirect("/");
});

module.exports = router;
