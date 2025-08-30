import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, default: '' },
  price: { type: Number, required: true, min: 0 },
  image: { type: String, default: '' },
  category: { type: String, default: 'General' },
  stock: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model('Product', productSchema);
