import { FavoriteEntity } from './FavoriteEntity'
import { UserEntity } from './User.entity'

export interface Database {
  favorites: {
    [user_id: string]: {
      nodes: FavoriteEntity[]
    }
  }
  user: {
    [user_id: string]: UserEntity
  }
}