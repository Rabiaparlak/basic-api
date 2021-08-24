const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

// Models

/* GET home page. */
router.get("/", (req, res) => {
  res.render("index", { title: "Express" });
});


// -------- LOGIN -------- //
router.post("/login", async (req, res) => {
});

// -------- REGISTER. -------- //
router.post("/register", async (req, res) => {

});


// -------- TOKEN CONTROL -------- //
router.post("/token-control", async (req, res) => {

});

module.exports = router;
