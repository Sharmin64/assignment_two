import cors from 'cors';

import express, { Application, Request, Response } from 'express';
import { ProductRoutes } from './app/modules/eComProduct/eComProduct.route';
import { orderRouter } from './app/modules/orderProduct/orderProduct.route';
const app: Application = express();

// persers
app.use(express.json());
app.use(cors());

// products router api create
app.use('/api/products', ProductRoutes);
// order routers
app.use('/api/orders', orderRouter);

const getPController = (req: Request, res: Response) => {
  res.send(
    '<h2 style= "color:#ffbcd9; tex-align:center; margin:20% auto; font-size:50px; font-weight:700;">Next Level Assignment Server  with mongodb and typescript is Running!',
  );
};

app.get('/', getPController);

export default app;
