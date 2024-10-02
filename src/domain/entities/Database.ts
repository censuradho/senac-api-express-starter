import { FavoriteEntity } from './FavoriteEntity'
import { ProductEntity } from './Product'

export interface Database {
  product: {
    lastId: number
    nodes: ProductEntity[]
  },
  favorites: {
    entries: {
      [user_id: string]: {
        nodes: FavoriteEntity[]
      }
    }
  }
}