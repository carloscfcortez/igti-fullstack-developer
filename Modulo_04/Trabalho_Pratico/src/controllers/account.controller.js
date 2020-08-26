import Account from "./../models/account";
import express from "express";

const router = express.Router();

router.get("/account", async (req, res, next) => {
  try {
    const account = await Account.find();
    return res.json(account);
  } catch (error) {
    next(error);
  }
});
