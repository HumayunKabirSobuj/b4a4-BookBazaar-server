import express from 'express';
import { productController } from './product.controller';

const router = express.Router();

router.post('/add-product', productController.addBookData);
router.get('/', productController.getAllBookData);

export const productRoutes = router;