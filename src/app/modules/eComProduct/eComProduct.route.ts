import express from 'express';
import { ProductController } from './eComProduct.controller';

const router = express.Router();

router.post('/', ProductController.cteateProduct);

export const ProductRoutes = router;
