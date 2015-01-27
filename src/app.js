import {Router} from 'aurelia-router';

export class App {	
	static inject() { return [Router]; }
	constructor(router){
		this.router = router;
		this.router.configure(config => {
			config.title = 'Gusten Movie DB';
			config.map([
				{ 
					route: ['', 'start'], 					
					moduleId: 'modules/start', 				
					nav: true, title: 'Start'
				},
				{ 
					route: 'genres',
				 	moduleId: 'modules/genres', 			
				 	nav: true, title: 'Genres'
				},
				{ 
					route: 'genres/:id', 			
					moduleId: 'modules/genre', 				
					nav: false, title: 'Genre'
				},
				{ 
					route: 'movies/:id', 			
					moduleId: 'modules/movies', 			
					nav: false, title: 'Movies'
				}
			]);
		});
	}
}