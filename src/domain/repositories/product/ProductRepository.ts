import { Database } from '@/domain/entities/Database';
import { IProductRepository } from './IProductRepository';
import { CreateProductDTO, ProductQuery } from '../../dto/Product.dto';
import { ProductEntity } from '@/domain/entities/Product';
import { HttpException } from '@/domain/models/HttpException';

export class ProductRepository implements IProductRepository {
  constructor (private database: Database) {}

  async create (payload: CreateProductDTO) {
    const id = this.database.product.lastId + 1

    const entity: ProductEntity = {
      ...payload,
      id: id,
    }

   this.database.product.nodes.push(entity)
   this.database.product.lastId = id
  }

  async findMany(query: ProductQuery): Promise<ProductEntity[]> {
      return this.database.product.nodes.filter(product => {
          const hasCategoryQuery = !!query.category
          const hasNameQuery = !!query.name

          if (hasCategoryQuery && hasNameQuery) return product.category === query.category && product.name.includes(query.name!)
          
          if (hasCategoryQuery) return product.category === query.category
          if (hasNameQuery) return  product.name.includes(query.name!)
          return true
        }
      )
  }

  async findById(id: number): Promise<ProductEntity | undefined> {
    const result = this.database.product.nodes.find(product => product.id === id)

    if (!result) throw new HttpException(404, 'Product not found')

    return result
  }

  async delete (id: number) {
    this.database.product.nodes = this.database.product.nodes.filter(product => product.id !== id) 
  }

  async update (id: number, payload: CreateProductDTO) {
    const productExist = this.database
    .product
    .nodes
    .find(product => product.id === id)

    if (!productExist) throw new HttpException(
      404,
      'Product not found'
    )


    this.database.product.nodes = this.database.product.nodes.map(
      product => product.id === id 
        ? ({
          ...payload,
          id: product.id
        })
        : product 
    )
  }
}
