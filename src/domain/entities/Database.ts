import { ProductEntity } from './Product'

export interface Database {
  product: {
    lastId: number
    nodes: ProductEntity[]
  }
}