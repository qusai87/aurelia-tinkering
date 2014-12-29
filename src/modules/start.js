import {HttpClient} from 'http-client';
import {AppConfig} from '../app-config';

export class Start{
	static inject() { return [HttpClient, AppConfig]; }
	constructor(httpClient, appConfig){
		this.popularMovies = [];
		this.highestRatedMovies = [];
		this.httpClient = httpClient;
		this.apiKey = '';
		this.config = appConfig;
	}

	activate(){		
		this.apiKey = localStorage.getItem('apiKey');
		this.loadPopularMovies();
		this.loadHighestRatedMovies();
	}

	saveApiKey(){
		localStorage.setItem('apiKey', this.apiKey);
		this.activate();
	}

	loadPopularMovies(){
		let url = `${this.config.baseUrl}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}`;	

		if(!this.apiKey){ return; }

		this.httpClient.get(url).then(x => {		
			let response = JSON.parse(x.response);
			this.popularMovies = response.results;			
		});		
	}

	loadHighestRatedMovies(){
		let url = `${this.config.baseUrl}/discover/movie?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=${this.apiKey}`;	

		if(!this.apiKey){ return; }

		this.httpClient.get(url).then(x => {		
			let response = JSON.parse(x.response);
			this.highestRatedMovies = response.results;			
		});		
	}
}