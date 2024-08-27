import { UserModel } from '@/domain/models/UserModel';
import { IUserRepository } from './IUserRepository';
import { PrismaClient } from '@prisma/client';

export class USerRepository implements IUserRepository  {
  constructor (private prisma: PrismaClient) {}

  async findMany(): Promise<UserModel[]> {

    const results: UserModel[] = await this.prisma.user.findMany({
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        updatedAt: true
      }
    })

    return results
  }
}