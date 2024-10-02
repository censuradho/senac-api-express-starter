import { MovieRepository } from '@/domain/repositories/movies/MovieRepository';
import { Request, Response } from 'express';

export class MovieController {
  constructor (private movieRepository: MovieRepository) {}

  async findMany (req: Request, res: Response) {
    const response = await this.movieRepository.findMany()

    return res.json(response)
  }
}