import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/bank", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
mongoose.Promise = global.Promise;

export default mongoose;
