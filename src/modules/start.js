import {DiscoverRepository} from '../repositories/discoverRepository';

export class Start{
	static inject() { return [DiscoverRepository]; }

	constructor(discoverRepository){
		this.popularMovies = [];
		this.highestRatedMovies = [];	
		this.apiKey = '';
		this.discoverRepository = discoverRepository;
		this.count = 10;
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
		if(!this.apiKey){ return; }	
		this.discoverRepository.getPopularMovies(this.count).then(movies => this.popularMovies = movies);	
	}

	loadHighestRatedMovies(){	
		if(!this.apiKey){ return; }	
		this.discoverRepository.getHighestRatedMovies(this.count).then(movies => this.highestRatedMovies = movies);		
	}
}