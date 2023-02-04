import express from "express";
import {
  //createPizzeria,
  getMenu,
  getMenuById,
  getPayment,
  getPizzeria,
  getTopics,
  getTopicsById,
  getPaymentById,
  //deletePizeria,
  //deleteMenu,
  //deleteTopics,
  //deletePayment,
  // getPizzeriaById,
} from "./controlers.js";

const router = express.Router();

router.get("/", getPizzeria);
//router.delete(":/id", deletePizeria);

//router.post("/", createPizzeria);
//router.get("/:id", getPizzeriaById);

//menu
router.get("/menu", getMenu);
router.get("/menu/:id", getMenuById);
//router.delete("/menu/:id", deleteMenu);

// Topics

router.get("/topics", getTopics);
router.get("/topics/:id", getTopicsById);
//router.get("/topics/:id", deleteTopics);

//Payment

router.get("/payment", getPayment);
router.get("/payment/:id", getPaymentById);
//router.delete("/payment/:id", deletePayment);

export default router;
