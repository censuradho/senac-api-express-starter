import { GhibliFilmModel, GhibliFilmModelMapper } from '@/domain/models/ghibli/GhibliFilmModel';
import axios from 'axios';
import https from 'https'

const agent = new https.Agent({  
  rejectUnauthorized: false
});

export class GhibliService {
  public http = axios.create({
    baseURL: 'https://ghibliapi.vercel.app',
    httpsAgent: agent
  })

  async findFilms () {
    const { data } = await this.http.get<GhibliFilmModel[]>('/films')
  
    return data.map(value => new GhibliFilmModelMapper(value))
  }
}