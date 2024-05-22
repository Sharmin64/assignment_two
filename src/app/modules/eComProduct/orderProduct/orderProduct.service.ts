import { POrder } from './orderProduct.interface';
import { Order } from './orderProduct.model';

const createOrder = async (payload: POrder) => {
  const result = await Order.create(payload);
  return result;
};
const getAllOrders = async (email: unknown) => {
  if (typeof email === 'string') {
    const result = await Order.find({ email });
    return result;
  }
  const result = await Order.find();
  return result;
};
export const orderServices = {
  createOrder,
  getAllOrders,
};
