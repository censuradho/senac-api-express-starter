import bcrypt from 'bcrypt'
import { randomUUID } from 'node:crypto'

import { CreateUserDTO } from '@/domain/dto/User.dto';
import { IUserRepository } from './IUserRepository';
import { Database } from '@/domain/entities/Database';
import { HttpException } from '@/domain/models/HttpException';
import { UserEntity } from '@/domain/entities/User.entity';

export class UserRepository implements IUserRepository {
  constructor (private database: Database) {}

  async create (payload: CreateUserDTO) {
    const userAlreadyExist = Object
      .values(
        this.database.user
      ).find(value => value.email === payload.email)

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
  }
}