import express, { Request, Response } from 'express';
import cors from 'cors';
import { UserRoutes } from './app/modules/user/user.route';
const app = express();
// const port = 3000;
app.use(cors());

//parser
app.use(express.json());

// app.use('/api/v1/students', StudentRoutes);

//application Route
app.use('/api/v1',UserRoutes );

const getController = (req: Request, res: Response) => {
  res.send('BookBazaar Server Running...');
};
app.get('/', getController);

export default app;
