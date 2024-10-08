import express from 'express'
import cors from 'cors'
import swaggerUI from 'swagger-ui-express'
import swaggerDocument from '../swagger.json'

import { environment } from '@/infra/environment'
import { router } from '@/infra/routes/index';
import { corsConfig } from './shared/config/cors';
import cookieParser from 'cookie-parser'


const app =  express()

app.use(cookieParser());
app.use(express.json()); 
app.use(router)
app.use(cors(corsConfig))

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

app.listen(environment.PORT, () => {
  console.log(`Listen on PORT: ${environment.PORT}/`);
})