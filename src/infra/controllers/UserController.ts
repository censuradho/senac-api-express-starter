import { Request, Response } from 'express';
import { UserRepository } from '@/domain/repositories/user/UserRepository';

export class UserController {
  constructor (private userRepository: UserRepository) {}

  create (req: Request, res: Response) {

    this.userRepository.create(req.body)

    res.sendStatus(201)
  }
}