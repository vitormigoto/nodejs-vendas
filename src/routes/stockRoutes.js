import express from 'express';
import stockController from '../controllers/StockController.js';

const router = express.Router();

router.get('/', stockController.getStock);
router.get('/:id', stockController.getOneStock);
router.post('/', stockController.insertStock);
router.put('/', stockController.updateStock);

export default router;
