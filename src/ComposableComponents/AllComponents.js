import React from "react"; 

import MovieList from "./Movielist" ;
import {Link} from 'react-router-dom'
import MovieApi from "../Data/MovieApi";

export default class  AllComponentspage extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            movies: []

        };

    }

    componentDidMount() {
console.log(this.state.movies)
MovieApi.getAllMovies(data=>this.setState({movies:data}))
     ;

    }

    render() {

        return (

            <div>

                <h1>Movies</h1>

                <MovieList
        movies={this.state.movies} />
        <Link to="/AddPage">Add Movie</Link>

            </div>

        );

    }

}
