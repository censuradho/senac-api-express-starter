import { randomUUID } from 'crypto';

import { FavoriteEntity } from '@/domain/entities/FavoriteEntity';
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

  async like (movie_id: string, user_id: string) {
    const favorite: FavoriteEntity = {
      id: randomUUID(),
      movie_id,
      user_id
    }

    const movieIds = this.database.favorites[user_id].nodes.map(value => value.movie_id)
    const alreadyLiked = movieIds.includes(movie_id)

    if (alreadyLiked) {
      this.database.favorites[user_id].nodes = this
        .database
        .favorites[user_id]
        .nodes
        .filter(value => value.movie_id !== movie_id)
        return
    }
    
    this.database.favorites[user_id].nodes.push(
      favorite
    )
  }

  async favorites (userId: string) {
    return this.database.favorites[userId]?.nodes || []
  }
}