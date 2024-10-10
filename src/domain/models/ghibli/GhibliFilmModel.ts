export class GhibliFilmModel {
  id: string
  title: string
  original_title: string
  description: string
  director: string
  producer: string
  release_date: string
  running_time: string
  rt_score: string
  image: string
  movie_banner: string

  constructor (data: GhibliFilmModel) {
    const payload: GhibliFilmModel = {
      id: data.id,
      title: data.title,
      original_title: data.original_title,
      description: data.description,
      director: data.director,
      producer: data.producer,
      release_date: data.release_date,
      running_time: data.running_time,
      rt_score: data.rt_score,
      image: data.image,
      movie_banner: data.movie_banner,
    }

    Object.assign(this, payload)
  }
}