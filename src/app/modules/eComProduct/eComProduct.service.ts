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

const getProductById = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const updateProduct = async (id: string, updatedProduct: EProduct) => {
  const result = await Product.findByIdAndUpdate(
    id,
    { $set: { ...updatedProduct } },
    { new: true },
  );
  return result;
};

export const ProductService = {
  createProductIntoDB,
  getAllProductFromDB,
  getProductById,
  updateProduct,
};
