import { describe, expect, it, vi } from 'vitest'
import { USerRepository } from '../UserRepository'

import { prismaMock } from '@/test/mock/prisma'

vi.mock('@/test/mock/prisma')
describe('UserRepository', () => {
  it('Should return many users', async () => {
      
      prismaMock.user.findMany.mockResolvedValue([])
      
      const repository = new USerRepository(prismaMock)

      const users = await repository.findMany()

      expect(users).toStrictEqual([])
  })
})