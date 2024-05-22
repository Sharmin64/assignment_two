import { Request, Response } from 'express';
import { ProductService } from './eComProduct.service';
import { productsValidationSchema } from './eComProduct.validator';

const cteateProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    //    validate the data
    const product = productsValidationSchema.parse(data);
    // will call service func to send this data
    const newProduct = await ProductService.createProductIntoDB(product);

    // will send response from here

    res.status(200).json({
      success: true,
      message: 'Product Created Successfully!',
      data: newProduct,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const result = await ProductService.getAllProductFromDB(searchTerm);
    res.json({
      success: true,
      message: 'Products fetched successfully!',
      date: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something Went Wrong!!',
      date: err,
    });
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.getProductById(productId);
    if (!result) {
      return res.status(400).json({
        success: false,
        message: 'Product not found',
        data: result,
      });
    }
    res.json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something Went Wrong',
      data: err,
    });
  }
};

const updateProductFromDb = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const data = req.body;
    const updatedProduct = productsValidationSchema.parse(data);
    const result = await ProductService.updateProduct(
      productId,
      updatedProduct,
    );
    res.json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      data: err,
    });
  }
};
export const ProductController = {
  cteateProduct,
  getAllProducts,
  getProductById,
  updateProductFromDb,
};
