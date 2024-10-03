import { Jwt } from '@/shared/jwt';
import { NextFunction, Request, Response } from 'express';
import { JsonWebTokenError } from 'jsonwebtoken';

export async function jwtMiddleware (req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.cookies?.token

    Jwt.verifyAccessToken(token)
  
    next()
  } catch (error: any) {
    if (error instanceof JsonWebTokenError) {
      return res.sendStatus(401)
    } 

    return res.sendStatus(500)
  }
}