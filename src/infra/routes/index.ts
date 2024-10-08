import { Router } from 'express';
import { productRouter } from './product.route';
import { healthCheckRouter } from './healthcheck.route';
import { movieRoute } from './movie.route';
import { userRoute } from './user.route';
import { authRoute } from './auth.route';

const router = Router()

router.use(productRouter)
router.use(movieRoute)
router.use(authRoute)
router.use(healthCheckRouter)
router.use(userRoute)

export { router };
