import {HttpClient} from 'http-client';
import {Settings} from '../settings';

export class MovieRepository{
  static inject() { return [HttpClient, Settings]; }

  constructor(httpClient, settings){
    this.httpClient = httpClient;
    this.settings = settings;
    this.apiKey = localStorage.getItem('apiKey');
  }

  getById(id){
    let url = `${this.settings.baseUrl}/movie/${id}?api_key=${this.apiKey}`;     
         
    return this.httpClient.get(url).then(response => {               
      return response.content;
    });
  }; 
}