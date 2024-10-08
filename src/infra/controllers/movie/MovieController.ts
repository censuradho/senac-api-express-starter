import { JWTPayload } from '@/domain/models/JWTPayload';
import { MovieRepository } from '@/domain/repositories/movies/MovieRepository';
import { Request, Response } from 'express';

export class MovieController {
  constructor (private movieRepository: MovieRepository) {}

  async findMany (req: Request, res: Response) {
    const response = await this.movieRepository.findMany()

    return res.json(response)
  }

  async like (req: Request, res: Response) {
    const user = req?.user as JWTPayload
    const movieId = req.params.id

    this.movieRepository.like(movieId, user.user_id)

    return res.sendStatus(201)
  }

  async favorites (req: Request, res: Response) {
    const payload = await this.movieRepository.favorites(req.user?.user_id as string)

    return res.json(payload)
  }
}