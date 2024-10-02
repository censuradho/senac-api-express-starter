import { Router } from 'express';
import { productRouter } from './product.route';
import { healthCheckRouter } from './healthcheck.route';
import { movieRoute } from './MovieRoute';

const router = Router()

router.use(productRouter)
router.use(movieRoute)
router.use(healthCheckRouter)

export { router };
