const router = express.Router();
import express from 'express';
import { productStarred, products, starredProducts } from '../controllers/productController.js';

router.get('/', products);
router.post('/starred', productStarred);
router.get('/starredProducts', starredProducts);

export default router;