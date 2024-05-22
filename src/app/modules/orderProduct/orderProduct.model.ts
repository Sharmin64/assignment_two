import { Schema, model } from 'mongoose';
import { POrder } from './orderProduct.interface';
import { Product } from '../eComProduct/eComProduct.model';

const orderSchema = new Schema<POrder>({
  email: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

orderSchema.pre('save', async function (next) {
  const result = await Product.findById(this.productId);
  if (!result) {
    throw new Error('Product does not exists by this productId');
  }
  // check the requested quantity is greater than the product quantity

  const {
    inventory: { quantity },
  }: any = await Product.findById(this.productId);

  if (quantity < this.quantity) {
    throw new Error('Inediquate quantity available in inventory');
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    this.productId,
    {
      $inc: {
        'inventory.quantity': -this.quantity,
      },
    },
    { new: true },
  );
  // update the inStock if quantity is 0
  if (updatedProduct?.inventory.quantity === 0) {
    await Product.findByIdAndUpdate(this.productId, {
      $set: {
        'inventory.inStock': false,
      },
    });
  }
  next();
});

export const Order = model<POrder>('Order', orderSchema);
