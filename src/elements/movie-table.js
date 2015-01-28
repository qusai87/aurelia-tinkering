import {Behavior} from 'aurelia-framework';

export class MovieTable{
   static metadata() { 
    return Behavior.withProperty('movies').
                    withProperty('title'); }   

  favorite(movie){
    movie.favorite = !movie.favorite;    
  }
}