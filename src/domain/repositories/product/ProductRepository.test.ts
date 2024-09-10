import { RuleLevel } from './../../../../node_modules/@typescript-eslint/utils/dist/ts-eslint/Config.d';
/* eslint-disable @typescript-eslint/no-explicit-any */
 
import { CreateProductDTO } from '@/domain/dto/Product.dto';
import { Database } from '@/domain/entities/Database';
import { describe, expect, it } from 'vitest';
import { ProductRepository } from './ProductRepository';
import { HttpException } from '@/domain/models/HttpException';

describe('ProductRepository suit', () => {
  const database: Database = {
    product: {
      lastId: 1,
      nodes: [
        {
          category: 'category',
          id: 1,
          name: 'name',
          value: 2
        }
      ]
    }
  }

  const repository = new ProductRepository(database)

  
  it('Should create a product entry', async () => {
    const payload: CreateProductDTO = {
      category: 'category',
      name: 'teste',
      value: 1
    }

    const previousProductAmount = database.product.nodes.length

    await repository.create(payload)
    
    expect(database.product.nodes.length).toBe(previousProductAmount + 1)
  })
  
  it('Should return a product by id', async () => {
    const product = await repository.findById(database.product.lastId)

    expect(product).toBeTruthy()
  })

  it('Should throw an error if product searched is not found', async () => {
      const product = await repository.findById(123123123123)
     
      expect(product).toBeFalsy()
  })

  it('Should find a list of products', async () => {
    const products = await repository.findMany()

    expect(products).toBeInstanceOf(Array)
  })

  it ('Should query a list of product base in a specific name', async () => {
    const { name } = database.product.nodes[0]

    const products = await repository.findMany({
      name
    })

    expect(
      products.map(entry => entry.name)
    ).include(name)
  })

  it('Should return a empty array if not found product query by name', async () => {
    const products = await repository.findMany({
      name: 'aaaaaaaaaaaaa'
    })

    expect(products.length).toBe(0)
  })

  it ('Should query a list of product base in a specific category', async () => {
    const { category } = database.product.nodes[0] 

    const products = await repository.findMany({
      category
    })

    expect(
      products.map(entry => entry.category)
    ).include(category)
  })

  it('Should return a empty array if not found product query by category', async () => {
    const products = await repository.findMany({
      category: 'aaaaaaaaaaaaa'
    })

    expect(products.length).toBe(0)
  })

  it ('Should query a list of product base in a specific category and name', async () => {
    const { category, name } = database.product.nodes[0]

    const products = await repository.findMany({
      category,
      name
    })

    expect(products.length).toBe(1)
  })

  it ('Should update a product by id', async () => {
    const payload: CreateProductDTO = {
      category: 'xxxxxxx',
      name: 'namexxxxxx',
      value: 2
    }

    await repository.update(database.product.lastId, payload)

    const product = await repository.findById(database.product.lastId)

    expect(JSON.stringify(product))
    .toBe(
      JSON.stringify(
        Object.assign(payload, {
          id: product?.id
        })
      )
    )
  })

  
  it ('Should not update a product if pass id of product not found', async () => {
    try {
      const payload: CreateProductDTO = {
        category: 'xxxxxxx',
        name: 'namexxxxxx',
        value: 2
      }
  
      await repository.update(9999, payload)
    } catch(error: any) {
      expect(error).instanceOf(HttpException)
    }
  })

  it('Should delete a product by id', async () => {
    const previousProducts = await repository.findMany()
    const amount = previousProducts.length

    await repository.delete(database.product.lastId)

    const products = await repository.findMany()

    expect(products.length).toBe(amount - 1)
  })



})