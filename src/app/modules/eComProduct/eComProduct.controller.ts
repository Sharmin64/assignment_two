import { Request, Response } from 'express';
import { ProductService } from './eComProduct.service';
import { productsValidationSchema } from './eComProduct.validator';
import { date } from 'zod';

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

export const ProductController = {
  cteateProduct,
  getAllProducts,
};
