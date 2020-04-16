import { Product } from "../models/product.js";

// Get All Products
export const getAllProducts = (req, res, next) => {
  Product.find()
    .then((products) => {
      res.json(products);
    })
    .catch((err) => console.log(err));
};

// read one
// WORKING
export const getProductById = (req, res, next) => {
  const prodId = req.params;
  console.log("PRODUCT ID " + prodId.id);
  Product.findById(prodId.id)
    .then((product) => {
      if (!product) {
        return res.redirect("/");
      }
      res.json(product);
    })
    .catch((err) => console.log(err));
};

// create
export const postAddProduct = (req, res, next) => {
  console.log(req.query);
  const product = new Product({
    make: req.query.make,
    year: req.query.year,
    model: req.query.model,
    torque: req.query.torque,
    engine: req.query.engine,
    sixty: req.query.sixty,
    topSpeed: req.query.topSpeed,
    price: req.query.price,
    hp: req.query.hp,
    weight: req.query.weight,
  });
  product
    .save()
    .then((result) => {
      console.log("Created Product");
      res.send("Created Product! Check your DB");
      // res.redirect('/admin/products')
    })
    .catch((err) => console.log(err));
};

// update
// WORKING
export const postEditProduct = (req, res, next) => {
  console.log(req.query.price);
  const prodId = req.query.id;
  const updatedMake = req.query.make
  const updatedYear = req.query.year
  const updatedModel = req.query.model
  const updatedTorque = req.query.torque
  const updatedEngine = req.query.engine
  const updatedSixty = req.query.sixty
  const updatedTopSpeed = req.query.topSpeed
  const updatedPrice = req.query.price
  const updatedHp = req.query.hp
  const updatedWeight = req.query.weight
  console.log(req.query);

  Product.findById(prodId)
    .then((product) => {
      product.price = updatedPrice
      product.make = updatedMake
      product.year = updatedYear
      product.model = updatedModel
      product.torque = updatedTorque
      product.engine = updatedEngine
      product.sixty = updatedSixty
      product.topSpeed = updatedTopSpeed
      product.hp = updatedHp
      product.weight = updatedWeight
      return product.save();
    })
    .then((result) => {
      console.log("Updated product");
      res.redirect("/admin/getAllProducts");
    })
    .catch((err) => console.log(err));
};

// delete
// 
export const postDeleteProduct = (req, res, next) => {
  const prodId = req.query.id;
  Product.findByIdAndRemove(prodId)
    .then(() => {
      console.log("Product was deleted");
      res.redirect("/admin/getAllProducts");
    })
    .catch((err) => console.log(err));
};
