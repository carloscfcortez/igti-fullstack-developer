import {
  EnoughDataException,
  FieldRequiredException,
  NotFoundException,
} from "../common/error-handling";
import Account from "./../models/account";

const FEE_TRANSACTION_WITHDRAW = parseFloat("1");
const FEE_TRANSACTION_TRANSFER_AGENCY_DISTINCT = parseFloat("8");

class AccountController {
  async getAll(req, res, next) {
    try {
      const account = await Account.find({ ...req.query }, [
        "name",
        "agencia",
        "conta",
      ]);
      res.formatter.ok(account);
    } catch (error) {
      next(error);
    }
  }

  async getBalance(req, res, next) {
    try {
      const { agencia, conta } = req.body;

      const account = await Account.findOne({ agencia, conta }, ["balance"]);

      if (!account) throw new NotFoundException("Account");

      res.formatter.ok(account);
    } catch (error) {
      next(error);
    }
  }

  async destroy(req, res, next) {
    try {
      const { agencia, conta } = req.body;

      if (!agencia || !conta) throw new FieldRequiredException("agencia/conta");

      const account = await Account.findOne({ agencia, conta }, ["_id"]);

      if (!account) throw new NotFoundException("Account");

      await Account.deleteOne({ _id: account._id });

      const count = await Account.countDocuments();

      res.formatter.ok({ total_active_accounts: count });
    } catch (error) {
      next(error);
    }
  }

  async registerDeposit(req, res, next) {
    try {
      const { agencia, conta, valor } = req.body;

      const account = await Account.findOne({ agencia, conta });

      if (account) {
        account.balance += parseFloat(valor);
      }

      await Account.updateOne({ _id: account._id }, account);

      //const account = await Account.create({});
      res.formatter.ok(account);
    } catch (error) {
      next(error);
    }
  }
  async registerWithDraw(req, res, next) {
    try {
      const { agencia, conta, valor } = req.body;

      const account = await Account.findOne({ agencia, conta });

      if (!account) throw new NotFoundException("Account");

      if (account) {
        if (account.balance >= FEE_TRANSACTION_WITHDRAW + parseFloat(valor)) {
          account.balance -= parseFloat(valor);
          await Account.updateOne({ _id: account._id }, account);
        } else {
          throw new EnoughDataException("Insufficient funds");
        }
      }
      //const account = await Account.create({});
      res.formatter.ok(account);
    } catch (error) {
      next(error);
    }
  }

  async transfer(req, res, next) {
    try {
      const {
        agencia_source,
        conta_source,
        agencia_target,
        conta_target,
        valor,
      } = req.body;

      const account_source = await Account.findOne({
        agencia: agencia_source,
        conta: conta_source,
      });

      const account_target = await Account.findOne({
        agencia: agencia_target,
        conta: conta_target,
      });

      if (!account_source) throw new NotFoundException("Account source");

      if (!account_target) throw new NotFoundException("Account target");

      let agencyDifferent = false;
      if (account_source.agencia != account_target.agencia)
        agencyDifferent = true;

      if (
        (agencyDifferent &&
          account_source.balance <
            FEE_TRANSACTION_TRANSFER_AGENCY_DISTINCT + parseFloat(valor)) ||
        (!agencyDifferent && account_source.balance < parseFloat(valor))
      ) {
        throw new EnoughDataException("Insufficient funds");
      }

      account_source.balance -= parseFloat(valor);
      await Account.updateOne({ _id: account_source._id }, account_source);

      account_target.balance += parseFloat(valor);
      await Account.updateOne({ _id: account_target._id }, account_target);
      //const account = await Account.create({});
      res.formatter.ok(account_source);
    } catch (error) {
      next(error);
    }
  }
}

export default new AccountController();
