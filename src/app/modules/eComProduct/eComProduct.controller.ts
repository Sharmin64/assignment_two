import { Request, Response } from 'express';
import { ProductService } from './eComProduct.service';

const cteateProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;

    // will call service func to send this data
    const result = await ProductService.createProductIntoDB(product);

    // will send response from here

    res.status(200).json({
      success: true,
      message: 'Product Created Successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const ProductController = {
  cteateProduct,
};
