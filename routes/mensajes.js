const express = require("express");
const router = express.Router();


router.get("/", async (req, res) => {
  res.json({"Mensaje":"Bienvenido al api"})
});

module.exports = router;