import {DiscoverRepository} from '../repositories/discoverRepository';
import {EventAggregator} from 'aurelia-event-aggregator';

export class Start{

	static inject() { return [DiscoverRepository, EventAggregator]; }

	constructor(discoverRepository, eventAggregator){
		this.popularMovies = [];
		this.highestRatedMovies = [];	
		this.apiKey = '';
		this.discoverRepository = discoverRepository;
		this.count = 10;
		this.eventAggregator = eventAggregator;		
		this.popularMoviesTitle = `Top ${this.count} most popular movies`;
		this.highestRatedMoviesTitle = `Top ${this.count} highest rated movies`;
	}

	activate(){		
		this.apiKey = localStorage.getItem('apiKey');
		this.loadPopularMovies();
		this.loadHighestRatedMovies();
		this.subscribe();
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

	subscribe(){
		this.eventAggregator.subscribe('movieSearchEvent', searchText => {
			console.log(searchText);
		});
	}

}