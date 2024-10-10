import { Router } from 'express';

import { MovieRepository } from '@/domain/repositories/movies/MovieRepository';
import { GhibliService } from '@/domain/services/ghibli';
import { jwtMiddleware } from '@/domain/middleware/auth.middleware';

import { MovieController } from '@/infra/controllers/movie.controller';
import { database } from '@/shared/db';

const movieRoute = Router()

const repository = new MovieRepository(
  new GhibliService(),
  database
)
const controller = new MovieController(repository)

movieRoute.get('/movies', controller.findMany.bind(controller))
movieRoute.patch('/movies/like/:id', jwtMiddleware, controller.like.bind(controller))
movieRoute.get('/movies/favorites', jwtMiddleware, controller.favorites.bind(controller))

export {
  movieRoute
}