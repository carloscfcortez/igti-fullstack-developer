import mongoose from './../database/index';

export const GradeAttributes = {
  id: Number,
  student: String,
  subject: String,
  type: String,
  value: Number,
  timestamp: String,
};

const GradeSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  student: {
    type: String,
  },
  subject: {
    type: String,
  },
  type: { type: String },
  value: {
    type: Number,
  },
  timestamp: {
    type: Date,
  },
});

const Grade = mongoose.model('grade', GradeSchema, 'grade');

export default Grade;
