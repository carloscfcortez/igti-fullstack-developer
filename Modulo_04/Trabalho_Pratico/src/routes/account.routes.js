import express from 'express';
import AccountController from './../controllers/account.controller'

const router = express.Router();


router.get('/', AccountController.getAll);

router.get('/balance', AccountController.getBalance);
router.put('/deposit', AccountController.registerDeposit);
router.put('/withdraw', AccountController.registerWithDraw);
router.put('/transfer', AccountController.transfer);
router.delete('/', AccountController.destroy);


export default router;