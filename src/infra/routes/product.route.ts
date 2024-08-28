import { productBodyValidation } from '@/domain/repositories/product/product.validation';
import { ProductRepository } from '@/domain/repositories/product/ProductRepository';
import { database } from '@/shared/db';
import { Router } from 'express';
import { ProductController } from '../controllers/product/ProductController';

const productRouter = Router()

const repository = new ProductRepository(database)
const controller = new ProductController(repository)

productRouter.post('/product', productBodyValidation, controller.create.bind(controller))
productRouter.get('/product', controller.findMany.bind(controller))
productRouter.get('/product/:id', controller.findById.bind(controller))
productRouter.delete('/product/:id', controller.delete.bind(controller))
productRouter.get('/product/category/:category', controller.findById.bind(controller))

export {
  productRouter
};
