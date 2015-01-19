import {CommonRepository} from '../repositories/CommonRepository';

export class Genres {
  static inject() { return [CommonRepository];}

  constructor(commonRepository){
    this.commonRepository = commonRepository;
  }

  activate(){
   return this.loadGenres();
  };

  loadGenres(){
    return this.commonRepository.getGenres().then(genres => {
      console.table(genres.genres);
      return this.genres = genres.genres;
    });
  };

}