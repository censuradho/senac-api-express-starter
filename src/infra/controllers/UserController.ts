import { Request, Response } from 'express';
import { UserRepository } from '@/domain/repositories/user/UserRepository';
import { HttpException } from '@/domain/models/HttpException';

export class UserController {
  constructor (private userRepository: UserRepository) {}

  create (req: Request, res: Response) {
    try {
      
      this.userRepository.create(req.body)

      res.sendStatus(201)
    } catch (error: any) {
      if (error instanceof HttpException) {
        return res.status(error.status).json({ message: error.message })
      }

      return res.sendStatus(500)    
    }
  }
}