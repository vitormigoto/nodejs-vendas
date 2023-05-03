import express from 'express';
import clientsController from '../controllers/ClientsController.js';

const router = express.Router();

router.get('/', clientsController.getClients);
router.post('/', clientsController.insertClients);

export default router;
