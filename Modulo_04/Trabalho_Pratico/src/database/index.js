import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/bank', {useMongoClient: true});
mongoose.Promise = global.Promise;


export default mongoose;