import { MovieRepository } from '@/domain/repositories/movies/MovieRepository';
import { GhibliService } from '@/domain/services/ghibli';
import { Router } from 'express';
import { MovieController } from '../controllers/movie/MovieController';

const movieRoute = Router()

const repository = new MovieRepository(
  new GhibliService()
)
const controller = new MovieController(repository)

movieRoute.get('/movies', controller.findMany.bind(controller))

export {
  movieRoute
}