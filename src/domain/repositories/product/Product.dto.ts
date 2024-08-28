
import { IsString, IsNumber, IsPositive } from 'class-validator'

export class CreateProductDTO {
  @IsString()
  name: string

  @IsNumber()
  @IsPositive()
  value: number

  @IsString()
  category: string
}

export class ProductQuery {
  category?: string
  name?: string
}