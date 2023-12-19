import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import http from 'http';
import cron from 'node-cron';
import productRoutes from './routes/productRoutes.js';
import updateProductPrices from './utils/updateProductPrices.js';
import bodyParser from "body-parser";

const app = express();
const server = http.createServer(app);
export const prisma = new PrismaClient();
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 150, // Max requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
  origin: ['http://127.0.0.1:5173', 'http://localhost:5173'],
  credentials: true,
  optionSuccessStatus: 200,
}));
app.use('/products', limiter);
app.use('/products', productRoutes);

async function startServer() {
  try {
    server.listen(5000, () => {
      console.log(`Server started on port 5000`);
    });
    await prisma.$connect();
    console.log('Database connected');

    // Update product prices  every day at 12 AM(midnight) 
    cron.schedule('0 0 * * *', () => {
      updateProductPrices();
    }, {
      timezone: 'Asia/Karachi', // Pakistan timezone
    });

  } catch (error) {
    console.error('Failed to connect to the database:', error);
    server.close();
  }
}

startServer();
