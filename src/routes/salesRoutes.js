import express from 'express';
import salesController from '../controllers/SalesController.js';

const router = express.Router();

router.get('/', salesController.getSales);
router.post('/', salesController.saleCart);

export default router;