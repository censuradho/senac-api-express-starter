import { Router } from 'express';
import { productRouter } from './product.route';

const router = Router()

router.use(productRouter)

export { router };
