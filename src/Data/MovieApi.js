import axios from 'axios';

export default class MovieApi {

	static getAllMovies(cb) {

		axios.get('http://localhost:4000/movies')

			.then(response => cb(response.data))

			.catch(error => { throw error });

	}
	static addMovies(movie,cb){
		axios.post('http://localhost:4000/movies',movie)
		.then(response=>cb(response.data))
		.catch(error=>{throw error})
	}

}
