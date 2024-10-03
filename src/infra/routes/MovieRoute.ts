import { MovieRepository } from '@/domain/repositories/movies/MovieRepository';
import { GhibliService } from '@/domain/services/ghibli';
import { Router } from 'express';
import { MovieController } from '../controllers/movie/MovieController';
import { database } from '@/shared/db';

const movieRoute = Router()

const repository = new MovieRepository(
  new GhibliService(),
  database
)
const controller = new MovieController(repository)

movieRoute.get('/movies', controller.findMany.bind(controller))

export {
  movieRoute
}