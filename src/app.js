import express from 'express';
const app = express();
import bodyParser from 'body-parser';
import productsRoutes from './routes/productsRoutes.js';
import stockRoutes from './routes/stockRoutes.js';
import salesRoutes from './routes/salesRoutes.js';
import clientsRoutes from './routes/clientsRoutes.js';

// Configuração de middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//definindo Rotas
app.use('/produtos', productsRoutes);
app.use('/estoque', stockRoutes);
app.use('/venda', salesRoutes);
app.use('/clientes', clientsRoutes);

export default app;
