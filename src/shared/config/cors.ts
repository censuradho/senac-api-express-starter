import { environment } from '@/infra/environment';
import { CorsOptions } from 'cors';

export const corsConfig: CorsOptions = {
  origin: environment.CORS,
}