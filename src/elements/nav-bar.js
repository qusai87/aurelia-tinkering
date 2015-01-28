import {Behavior} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

export class NavBar {
  static inject(){ return [EventAggregator]; }
  static metadata(){ return Behavior.withProperty('router'); } 

  constructor(eventAggregator){
    this.searchText = '';
    this.eventAggregator = eventAggregator;
    this.movieFavoriteCount = 0;
    this.wireupSubscriptions();
  }

  wireupSubscriptions(){
    this.eventAggregator.subscribe('movieFavorited', movieFavObj => {

      if(movieFavObj.fav){
        this.movieFavoriteCount++;
      }else{
        this.movieFavoriteCount--;
      }

      
      console.log(movieFavObj.movie);
    });
  }
}
