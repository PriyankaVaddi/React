import React from 'react';
import  Movie from './Movie';

export default class MovieList extends React.Component {
  render () {
   
    var movieNodes = this.props.movies.map(movie => (
        <Movie id={movie.id} name={movie.name} Release={movie.Release} Rating={movie.Rating} >
          {movie.text}
        </Movie>
    ));
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>Release</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {movieNodes}
          </tbody>
        </table>
      </div>
    );
  }
}
