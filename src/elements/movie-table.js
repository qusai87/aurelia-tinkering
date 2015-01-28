import {Behavior} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

export class MovieTable{
  static metadata() { 
    return Behavior.withProperty('movies').
                    withProperty('title'); 
  }   

  static inject() { return [EventAggregator]; }

  constructor(eventAggregator){
    this.eventAggregator = eventAggregator;
  }

  favorite(movie){
    var movieFavObj = {};
    movie.favorite = !movie.favorite;    
    movieFavObj.fav = movie.favorite;
    movieFavObj.movie = movie;

    this.eventAggregator.publish('movieFavorited', movieFavObj);
  }
}