import { CreateUserDTO } from '@/domain/dto/User.dto';
import { Database } from '@/domain/entities/Database';

export const memoryDB: Database = {
  favorites: {},
  product: {
    lastId: 0,
    nodes: []
  },
  user: {}
}

export const userMock: CreateUserDTO = {
  email: 'teste@teste.com',
  firstName: 'Gustavo',
  lastName: 'Leite Oliveira',
  password: '12345678'
}