import { model, Schema } from 'mongoose';
import { TProduct } from './product.interface';

const ProductSchema = new Schema<TProduct>({
  title: { type: String, required: true },
  numberOfBooks: { type: Number, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  category: { type: String, required: true },
  imageUrl: { type: String, required: true },
  authorName: { type: String, required: true },
  authorEmail: { type: String, required: true },
  isAvaillable: { type: Boolean, required: true },
  isDeleted: { type: Boolean, default: false },
});
export const Product = model<TProduct>('Product', ProductSchema);
