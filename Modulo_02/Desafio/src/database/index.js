import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/igti-desafio-02', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.Promise = global.Promise;

export default mongoose;
