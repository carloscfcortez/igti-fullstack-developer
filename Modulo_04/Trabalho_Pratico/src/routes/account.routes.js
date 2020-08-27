import express from 'express';
import AccountController from './../controllers/account.controller'

const router = express.Router();


router.get('/', AccountController.getAll);


export default router;