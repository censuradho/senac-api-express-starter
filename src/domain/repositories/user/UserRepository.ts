import { CreateUserDTO } from '@/domain/dto/User.dto';
import { IUserRepository } from './IUserRepository';

export class UserRepository implements IUserRepository {
  create (payload: CreateUserDTO) {
    
  }
}