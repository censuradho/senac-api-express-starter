import { AuthRepository } from '@/domain/repositories/auth/AuthRepository';
import { UserRepository } from '@/domain/repositories/user/UserRepository';
import { database } from '@/shared/db';
import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';
import { signInWithEmailAndPasswordRequestBodyValidation } from '@/domain/middleware/auth.validations';
import { jwtMiddleware } from '@/domain/middleware/auth.middleware';
import { createUserValidation } from '@/domain/middleware/user.validations';

const authRoute = Router()

const userRepository = new UserRepository(database)
const repository = new AuthRepository(userRepository)
const controller = new AuthController(repository)

authRoute.post('/auth/login', signInWithEmailAndPasswordRequestBodyValidation, controller.signInWithEmailAndPassword.bind(controller))
authRoute.get('/auth/me', jwtMiddleware, controller.me.bind(controller))
authRoute.post('/auth/register', createUserValidation, controller.signUpWithEmailAndPAssword.bind(controller))

export { 
  authRoute
}