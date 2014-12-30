import {DiscoverRepository} from '../repositories/discoverRepository';

export class Start{
	static inject() { return [DiscoverRepository]; }
	constructor(discoverRepository){
		this.popularMovies = [];
		this.highestRatedMovies = [];	
		this.apiKey = '';
		this.discoverRepository = discoverRepository;
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
		this.discoverRepository.getPopularMovies().then(movies => this.popularMovies = movies);	
	}

	loadHighestRatedMovies(){	
		this.discoverRepository.getHighestRatedMovies().then(movies => this.highestRatedMovies = movies);		
	}
}