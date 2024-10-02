import { GhibliService } from '@/domain/services/ghibli';

import { IMovieRepository } from './IMovieRepository';

export class MovieRepository implements IMovieRepository {
  constructor (private ghibliService: GhibliService) {}

  async findMany () {
    return await this.ghibliService.findFilms()
  }
}