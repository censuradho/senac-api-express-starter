// eslint-disable-next-line @typescript-eslint/no-require-imports
require('dotenv').config()

export const environment = {
  PORT: process.env.PORT,
  CORS: process.env.CORS?.split(',')
}