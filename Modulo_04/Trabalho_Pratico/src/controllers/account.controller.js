import Account from './../models/account'

class AccountController {
  async getAll(req, res, next){
    try {
      const account = await Account.find();
      res.send(account);
    } catch (error) {
      next(error);
    }
  }

  async store(req, res, next){
    try {
      const {agencia, conta, valor } = req.body;

      const account = await Account.findOne({agencia, conta});

      if(account){
        account.balance += valor;
      }

      await Account.updateOne({_id: account._id}, ...account);

      //const account = await Account.create({});
      res.json(account);
    } catch (error) {
      next(error);
    }
  }

}


export default new AccountController();