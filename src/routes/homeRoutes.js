import { Router } from 'express';
import homeContriller from '../controllers/HomeController';

const router = new Router();

router.get('/', homeContriller.index);

export default router;
