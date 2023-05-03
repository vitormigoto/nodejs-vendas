import express from 'express';
import productsController from '../controllers/ProductsController.js';

const router = express.Router();

router.get('/', productsController.getProducts);
router.post('/', productsController.insertProducts);

export default router;
