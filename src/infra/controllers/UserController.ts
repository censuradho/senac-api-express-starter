import { Request, Response } from 'express';
import { UserRepository } from '@/domain/repositories/user/UserRepository';
import { HttpException } from '@/domain/models/HttpException';

export class UserController {
  constructor (private userRepository: UserRepository) {}

  async create (req: Request, res: Response) {
    try {
      
      await this.userRepository.create(req.body)

      res.sendStatus(201)
    } catch (error: any) {
      console.log(error)
      if (error instanceof HttpException) {
        return res.status(error.status).json({ message: error.message })
      }

      return res.sendStatus(500)    
    }
  }
}