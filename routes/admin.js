const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  console.log("in other middleware");
  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title" /><button>Add Product</button><form action="/product" method="POST"><input type="text" name="size" /><button>Add Size Of Product</button></form></form>'
  );
  // res.send('')
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
