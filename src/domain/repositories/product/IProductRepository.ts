import { ProductEntity } from '@/domain/entities/Product';
import { CreateProductDTO, ProductQuery } from '../../dto/Product.dto';

 
export interface IProductRepository {
  create (payload: CreateProductDTO): Promise<number>
  findMany (query: ProductQuery): Promise<ProductEntity[]>
  findById (id: number): Promise<ProductEntity | undefined>
  delete (id: number): Promise<void>
  update (id: number, payload: CreateProductDTO): Promise<void>
}