import { createUserValidation } from '@/domain/middleware/user.validations';
import { Router } from 'express';
import { UserController } from '@/infra/controllers/UserController';
import { UserRepository } from '@/domain/repositories/user/UserRepository';


const userRoute = Router()

const repository = new UserRepository()
const controller = new UserController(repository)

userRoute.post('/user', createUserValidation, controller.create.bind(controller))

export {
  userRoute
}