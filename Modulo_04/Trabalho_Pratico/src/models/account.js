import { mongo } from 'mongoose';
import mongoose from './../database/index';

const AccountSchema = new mongoose.Schema({
  agencia: {
    type: Number,
    required: true
  },
  conta: {
    type:Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    default: 0,
    required: true,
    min: 0
  }
});

const Account = mongoose.model('account', AccountSchema, 'account');

export default Account;