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
      this.movie = movie;
      this.movie.release_date = this.movie.release_date.substring(0, 4);
      this.movie.poster_path = 'http://image.tmdb.org/t/p/w500' + this.movie.poster_path;
      console.table(movie);
    });
  }
}