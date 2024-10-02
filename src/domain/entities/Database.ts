import { FavoriteEntity } from './FavoriteEntity'
import { ProductEntity } from './Product'
import { UserEntity } from './User.entity'

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
  user: {
    [user_id: string]: UserEntity
  }
}