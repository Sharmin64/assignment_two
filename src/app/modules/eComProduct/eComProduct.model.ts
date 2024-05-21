import mongoose, { Schema, model } from 'mongoose';
import { EProduct, Inventory, Variant } from './eComProduct.interface';

const variantSchema = new Schema<Variant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const inventorySchema = new Schema<Inventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

const productSchema = new Schema<EProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tag: { type: [String], required: true },
  variant: { type: [variantSchema] },
  inventory: { type: [inventorySchema] },
});

export const Product = model<EProduct>('Product', productSchema);
