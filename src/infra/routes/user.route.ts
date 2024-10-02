import { Router } from 'express';

import { createUserValidation } from '@/domain/middleware/user.validations';
import { UserController } from '@/infra/controllers/UserController';
import { UserRepository } from '@/domain/repositories/user/UserRepository';
import { database } from '@/shared/db';


const userRoute = Router()

const repository = new UserRepository(database)
const controller = new UserController(repository)

userRoute.post('/user', createUserValidation, controller.create.bind(controller))

export {
  userRoute
}