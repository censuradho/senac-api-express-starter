import { UserModel } from '@/domain/models/UserModel';
import { IUserRepository } from './IUserRepository';

export class UserMockRepository implements IUserRepository {
  private users: UserModel[] = []

  async findMany(): Promise<UserModel[]> {
    return this.users
  }
}