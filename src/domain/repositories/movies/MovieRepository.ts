import { GhibliService } from '@/domain/services/ghibli';

import { Database } from '@/domain/entities/Database';
import { IMovieRepository } from './IMovieRepository';

export class MovieRepository implements IMovieRepository {
  constructor (
    private ghibliService: GhibliService,
    private database: Database
  ) {}

  async findMany () {
    return await this.ghibliService.findFilms()
  }
}