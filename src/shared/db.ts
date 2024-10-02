import { Database } from '@/domain/entities/Database';

export const database: Database = {
  product: {
    lastId: 0,
    nodes: []
  },
  favorites: {
    entries: {
      ['0']: {
        nodes: []
      }
    }
  }
}