import {HttpClient} from 'aurelia-http-client';
import {Settings} from '../settings';

export class CommonRepository {
  static inject() { return [ HttpClient, Settings]; }

  constructor(httpClient, settings){
    this.httpClient = httpClient;
    this.settings = settings;
    this.apiKey = localStorage.getItem('apiKey');
  }

  getGenres(){
    let url = `${this.settings.baseUrl}/genre/movie/list?api_key=${this.apiKey}`; 
    return this.httpClient.get(url).then(response => {
      return response.content;
    });
  }

  getMoviesByGenre(id){
    let url = `${this.settings.baseUrl}/genre/${id}/movies?api_key=${this.apiKey}`; 
    return this.httpClient.get(url).then(response => {
      return response.content;
    });
  }
}