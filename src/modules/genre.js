import {CommonRepository} from '../repositories/commonRepository';

export class Genre{
  static inject() { return [CommonRepository]; }

  constructor(commonRepository){
    this.commonRepository = commonRepository;
  }

  activate(routeParams){
    return this.loadMovies(routeParams.id);
  }

  loadMovies(id){
    return this.commonRepository.getMoviesByGenre(id).then(movies => {
      return this.movies = movies.results;
    });
  }
}