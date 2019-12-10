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
    getAllMovies=()=>{
        MovieApi.getAllMovies(data=>this.setState({movies:data}))
     }
    componentDidMount() {
            console.log(this.state.movies)
            this.getAllMovies();

                }
    addPage = ()=>{
        this.props.history.push('/AddPage',{data:this.state.movies})
    }
    render() {

        return (

            <div>

                <h1>Movies</h1>

                <MovieList
        movies={this.state.movies} />
        <button onClick={this.addPage}>Add Page</button>
        {/* <Link to="/AddPage">Add Movie</Link> */}

            </div>

        );

    }

}
