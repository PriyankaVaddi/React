import axios from 'axios';

import Moviedata from './Moviedata';
let currentID = 1;

export default class MovieApi {

	static getAllMovies(cb) {

		axios.get('http://localhost:4000/movies')

			.then(response => cb(response.data))

			.catch(error => { throw error });

	}


	static getMovie(id,cb){
		axios.get(`http://localhost:4000/movies/${id}`)
		.then(response => cb(response.data))

		.catch(error => { throw error });
	}




	static addMovies(movie,cb){
		axios.post('http://localhost:4000/movies',movie)
		.then(response=>cb(response.data))
		.catch(error=>{throw error})
	}

}






	