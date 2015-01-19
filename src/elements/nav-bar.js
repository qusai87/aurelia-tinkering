import {Property} from 'aurelia-framework';

export class NavBar {
  static annotations(){
    var prop = [new Property('router')];
    return prop;
  }
}