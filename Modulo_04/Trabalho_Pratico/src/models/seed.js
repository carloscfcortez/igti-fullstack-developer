import { mongo } from 'mongoose';
import mongoose from './../database/index';

const SeedSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  }
});

const Seed = mongoose.model('seed', SeedSchema, 'seed');

export default Seed;