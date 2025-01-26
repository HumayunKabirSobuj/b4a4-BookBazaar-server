import express from 'express';
import { productController } from './product.controller';

const router = express.Router();

router.post('/add-product', productController.addBookData);

export const productRoutes = router;
