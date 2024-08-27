import { Router } from 'express';

import { UserController } from '@/infra/controllers/user/UserController';
import { USerRepository } from '@/domain/repositories/user/UserRepository';
import { prisma } from '@/infra/prisma/PrismaClient';

const userRouter = Router()

const repository = new USerRepository(prisma)
const controller = new UserController(repository)

userRouter.get('/user', controller.findMany.bind(controller))

export { userRouter }