import { Router } from "express";

export const adminRouter = Router();

import {
  postAddProduct,
  getProductById,
  postEditProduct,
  postDeleteProduct,
  getAllProducts,
} from "../controllers/admin.controller";

adminRouter.get("/getAllProducts", getAllProducts);

adminRouter.get("/product/:id", getProductById);

adminRouter.post("/add-product", postAddProduct);

adminRouter.post("/edit-product", postEditProduct);

adminRouter.post("/delete-product/:id", postDeleteProduct);
