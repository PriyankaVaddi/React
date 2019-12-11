import React from 'react';
import MovieApi from './Data/MovieApi';

export default class MovieDetailPage extends React.Component {
state={
  movie:{}
}
  getMovie(){
MovieApi.getMovie(this.props.match.params.id,data=>this.setState({movie:data}))
  }
  componentDidMount(){
    this.getMovie()
  }
  render() {
    console.log("this.props",this.state.movie)

    
    return (
      <div>
        <h2> Movie Name: {this.state.movie.name }</h2>
        <h2> Movie Release: {this.state.movie.Release }</h2>
        <h2> Movie Rating: {this.state.movie.Rating }</h2>
      </div>
    );
  }
}
