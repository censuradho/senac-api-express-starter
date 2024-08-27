import { IUserRepository } from '@/domain/repositories/user/IUserRepository';
import { Request, Response } from 'express';

export class UserController {
  constructor (
   private userRepository: IUserRepository
  ) {}


  async findMany(req: Request, res: Response) {
    const result = await this.userRepository.findMany()

    return res.json(result)
  }
}