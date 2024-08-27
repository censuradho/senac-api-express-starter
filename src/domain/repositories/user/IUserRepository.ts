import { UserModel } from '@/domain/models/UserModel';

export interface IUserRepository {
  findMany (): Promise<UserModel[]>
}