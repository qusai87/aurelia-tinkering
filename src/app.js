import {Router} from 'aurelia-router';

export class App {	
	static inject() { return [Router]; }
	constructor(router){
		this.router = router;
		this.router.configure(config => {
			config.title = 'Gusten Movie DB';
			config.map([
				{ route: ['', 'start'], moduleId: 'modules/start', nav: false, title: 'Start'}
			]);
		});
	}
}