import { CreateUserDTO } from '@/domain/dto/User.dto';
import { IUserRepository } from './IUserRepository';
import { Database } from '@/domain/entities/Database';
import { HttpException } from '@/domain/models/HttpException';

export class UserRepository implements IUserRepository {
  constructor (private database: Database) {}

  create (payload: CreateUserDTO) {
    const userAlreadyExist = Object
      .values(
        this.database.user
      ).find(value => value.email === payload.email)


      if (userAlreadyExist) throw new HttpException(401, 'USER_ALREADY_EXIST')

  }
}