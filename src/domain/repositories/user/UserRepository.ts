import bcrypt from 'bcrypt';
import { randomUUID } from 'node:crypto';

import { CreateUserDTO } from '@/domain/dto/User.dto';
import { Database } from '@/domain/entities/Database';
import { UserEntity } from '@/domain/entities/User.entity';
import { HttpException } from '@/domain/models/HttpException';
import { IUserRepository } from './IUserRepository';

export class UserRepository implements IUserRepository {
  constructor (private database: Database) {}

  async findByEmail(email: string): Promise<UserEntity | undefined> {
    return Object
      .values(this.database.user)
      .find(value => value.email === email)
  }

  async findById(id: string): Promise<UserEntity | undefined> {
    return this.database.user[id]
  }


  async create (payload: CreateUserDTO) {
    const userAlreadyExist = await this.findByEmail(payload.email)

      const { password, ...otherPayload } = payload

      if (userAlreadyExist) throw new HttpException(401, 'USER_ALREADY_EXIST')

      const hashPassword = await bcrypt.hash(password, 10)
      const id = randomUUID()

      const user: UserEntity = {
        ...otherPayload,
        password: hashPassword,
        id
      }

      this.database.user[id] = user
      this.database.favorites[id] = {
        nodes: []
      }
  }
}