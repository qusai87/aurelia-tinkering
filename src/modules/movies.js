import {MovieRepository} from '../repositories/movieRepository';

export class Movies{
  static inject() { return [MovieRepository]; }

  constructor(movieRepository){
    this.movieRepository = movieRepository;
    this.title = '';
  }

  activate(routeParams){    
    return this.loadMovie(routeParams.id);
  }

  loadMovie(id){
    return this.movieRepository.getById(id).then(movie => {
      console.log(movie);
      this.title = movie.title;
      console.table(movie);
    });
  }
}