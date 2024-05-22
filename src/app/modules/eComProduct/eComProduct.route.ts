import express from 'express';
import { ProductController } from './eComProduct.controller';

const router = express.Router();

router.post('/', ProductController.cteateProduct);
router.get('/', ProductController.getAllProducts);
router.get('/:productId', ProductController.getProductById);
router.put('/:productId', ProductController.updateProductFromDb);

export const ProductRoutes = router;
