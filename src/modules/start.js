import {HttpClient} from 'http-client';

export class Start{
	static inject() { return [HttpClient]; }
	constructor(httpClient){
		this.popularMovies = [];
		this.httpClient = httpClient;
		this.apiKey = '';
	}

	activate(){
		this.apiKey = localStorage.getItem('apiKey');
		this.loadPopularMovies();
	}

	saveApiKey(){
		localStorage.setItem('apiKey', this.apiKey);
	}

	loadPopularMovies(){
		let url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}`;	
		this.httpClient.get(url).then(x => {		
			let response = JSON.parse(x.response);
			this.popularMovies = response.results;			
		});		
	}
}