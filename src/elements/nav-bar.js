import {Behavior} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

export class NavBar {
  static inject(){ return [EventAggregator]; }
  static metadata(){ return Behavior.withProperty('router'); } 

  constructor(eventAggregator){
    this.searchText = '';
    this.eventAggregator = eventAggregator;
  }

  search(){
    if(this.searchText){
      this.eventAggregator.publish('movieSearchEvent', this.searchText);
    }       
  }

}
