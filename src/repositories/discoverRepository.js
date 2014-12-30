import {HttpClient} from 'http-client';
import {Settings} from '../settings';

export class DiscoverRepository{
	static inject() { return [HttpClient, Settings]; }

	constructor(httpClient, settings){
		this.httpClient = httpClient;
		this.settings = settings;
		this.apiKey = localStorage.getItem('apiKey');
	}

	getPopularMovies(){

		if(!this.apiKey){ return; }

		let url = `${this.settings.baseUrl}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}`;			

	 	return	this.httpClient.get(url).then(x => {		
			return JSON.parse(x.response).results;						
		});
	};

	getHighestRatedMovies(){

		if(!this.apiKey){ return; }	

		let url = `${this.settings.baseUrl}/discover/movie?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=${this.apiKey}`;

		return	this.httpClient.get(url).then(x => {		
			return JSON.parse(x.response).results;						
		});
	}
}