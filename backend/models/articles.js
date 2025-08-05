import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  tags: { type: [String], default: [] }
}, { timestamps: true });

export default mongoose.model('Article', articleSchema);
