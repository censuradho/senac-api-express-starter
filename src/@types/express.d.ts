// custom.d.ts
import { JWTPayload } from '@/domain/models/JWTPayload';
import 'express';

declare global {
  namespace Express {
    interface Request {
      user?: JWTPayload
    }
  }
}