import cors from 'cors';

import express, { Application, Request, Response } from 'express';
import { ProductRoutes } from './app/modules/eComProduct/eComProduct.route';
const app: Application = express();

// persers
app.use(express.json());
app.use(cors());

// products router api create
app.use('/api/products', ProductRoutes);

const getPController = (req: Request, res: Response) => {
  res.send('Hello Assignment This is BackEnd Project!');
};

app.get('/', getPController);

export default app;
