import { Router } from 'express';
import { healthCheckRouter } from './healthcheck.route';
import { movieRoute } from './movie.route';
import { authRoute } from './auth.route';

const router = Router()

router.use(movieRoute)
router.use(authRoute)
router.use(healthCheckRouter)

export { router };
