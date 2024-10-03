import express from 'express'
import cors from 'cors'

import { environment } from '@/infra/environment'
import { router } from '@/infra/routes/index';
import { corsConfig } from './shared/config/cors';
import cookieParser from 'cookie-parser'

const app =  express()

app.use(express.json()); 
app.use(router)
app.use(cors(corsConfig))
app.use(cookieParser());

app.listen(environment.PORT, () => {
  console.log(`Listen on PORT: ${environment.PORT}/`);
})