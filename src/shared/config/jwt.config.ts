import { SignOptions } from 'jsonwebtoken';

export const jwtConfig: SignOptions = {
  expiresIn: '1800s',
}