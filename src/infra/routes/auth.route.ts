import { AuthRepository } from '@/domain/repositories/auth/AuthRepository';
import { UserRepository } from '@/domain/repositories/user/UserRepository';
import { database } from '@/shared/db';
import { Router } from 'express';
import { AuthController } from '../controllers/Auth.controller';
import { signInWithEmailAndPasswordRequestBodyValidation } from '@/domain/middleware/auth.validations';
import { jwtMiddleware } from '@/domain/middleware/auth.middleware';

const authRoute = Router()

const userRepository = new UserRepository(database)
const repository = new AuthRepository(userRepository)
const controller = new AuthController(repository)

authRoute.post('/auth/login', signInWithEmailAndPasswordRequestBodyValidation, controller.signInWithEmailAndPassword.bind(controller))
authRoute.get('/auth/me', jwtMiddleware, controller.me.bind(controller))

export { 
  authRoute
}