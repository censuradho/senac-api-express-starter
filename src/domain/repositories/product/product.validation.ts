import { NextFunction, Request, Response } from 'express';
import { CreateProductDTO } from './Product.dto';
import { validateOrReject } from 'class-validator';

export async function productBodyValidation (req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.body) return res.status(400).json({
      message: 'Missing request body'
    })

    const payload = new CreateProductDTO()

    Object.assign(payload, {
      category: req.body.category,
      value: req.body.value,
      name: req.body.name,
    })

    await validateOrReject(payload)

    next()
  } catch (error: any) {
    return res.status(400).json({
      message: Object.values(error[0].constraints)[0]
    })
  }

}