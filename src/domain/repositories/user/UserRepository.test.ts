import { CreateUserDTO } from '@/domain/dto/User.dto';
import { memoryDB, userMock } from '@/test/mock/memoryDB';
import { describe, expect, it } from 'vitest';
import { UserRepository } from './UserRepository';
import { HttpException } from '@/domain/models/HttpException';

describe('UserRepository', () => {
  const db = memoryDB

  const repository = new UserRepository(db)

  it ('Deve criar um usuário', async () => {
    const payload: CreateUserDTO = userMock

    await repository.create(payload)

    const userCount = Object.keys(db.user).length

    expect(userCount).toBe(1)
  })

  it ('Deve retornar um HttpException ao cadastrar um usuário com o mesmo e-mail', async () => {
    try {
      await repository.create(userMock)
    } catch (error: any) {
      expect(error).toBeInstanceOf(HttpException)
    }
  })

  it('Deve listar o usuário cadastrado anteriormente pelo e-mail', async () => {
    const user = await repository.findByEmail(userMock.email)

    expect(!!user).toBe(true)
  })

  it ('Deve listar o usuário pelo id')
})
