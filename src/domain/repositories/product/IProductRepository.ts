import { ProductEntity } from '@/domain/entities/Product';
import { CreateProductDTO, ProductQuery } from './Product.dto';

 
export interface IProductRepository {
  create (payload: CreateProductDTO): Promise<void>
  findMany (query: ProductQuery): Promise<ProductEntity[]>
  findById (id: number): Promise<ProductEntity | undefined>
  delete (id: number): Promise<void>
}