import { EProduct } from './eComProduct.interface';
import { Product } from './eComProduct.model';

const createProductIntoDB = async (product: EProduct) => {
  const production = await Product.create(product);
  return production;
};

const getAllProductFromDB = async (searchTerm: unknown) => {
  if (typeof searchTerm === 'string') {
    const result = Product.find({ $text: { $search: searchTerm } });
    return result;
  }
  const result = await Product.find();
  return result;
};

export const ProductService = {
  createProductIntoDB,
  getAllProductFromDB,
};
