/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpException } from '@/domain/models/HttpException';
import { IProductRepository } from '@/domain/repositories/product/IProductRepository';
import { ProductQuery } from '@/domain/repositories/product/Product.dto';
import { Request, Response } from 'express';

export class ProductController {
  constructor (
    private productRepository: IProductRepository
  ) {}

  async create (req: Request, res: Response) {
    await this.productRepository.create(req.body)

    res.sendStatus(201)
  }

  async findMany (req: Request, res: Response) {
    const category = req.query.category as string | undefined
    const name = req.query.name as string | undefined

    const query: ProductQuery = {
      category,
      name
    }
    
    const results = await this.productRepository.findMany(query)

    return res.json(results)
  }

  async findById (req: Request, res: Response) {
    try {
      const id = Number(req.params.id)

      if (typeof id !== 'number') return res.status(400).json({ message: 'id must be a number' })
  
      const result = await this.productRepository.findById(id)
        
      return res.json(result)
    } catch (error: any) {
      if (error instanceof HttpException) {
        return res.status(error.status).json({ message: error.message })
      }

      return res.sendStatus(500)    }
  }

  async delete (req: Request, res: Response) {
    const id = Number(req.params.id)

    await this.productRepository.delete(id)

    res.sendStatus(200)
  }

  async update (req: Request, res: Response) {
    try {
      const id = Number(req.params.id)
      await this.productRepository.update(id, req.body)
    } catch (error: any) {
      if (error instanceof HttpException) {
        return res.status(error.status).json({ message: error.message })
      }

      return res.sendStatus(500)
    }

  }
}