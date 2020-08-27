import Account from "../../models/account";
import Seed from "../../models/seed";
import fs from "fs";

class SeedService {
  async exec() {
    const existSeed = await Seed.findOne({ name: "account" });

    if (!existSeed) {
      const fileAccouts = fs.readFileSync("./accounts.json");

      const accounts = JSON.parse(fileAccouts);

      await Account.collection.drop();
      await Account.insertMany(accounts, (x) => {
        if (x) console.log(x);
      });

      await Seed.create({ name: "account" });
    }
  }
}

export default new SeedService();
