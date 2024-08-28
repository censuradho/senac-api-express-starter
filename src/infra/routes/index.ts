import { Router } from 'express';
import { productRouter } from './product.route';
import { healthCheckRouter } from './healthcheck.route';

const router = Router()

router.use(productRouter)
router.use(healthCheckRouter)

export { router };
