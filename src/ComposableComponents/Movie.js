import React from 'react';
import { Link } from 'react-router-dom';


export default class Movie extends React.Component {
  render() {
    const path = `/movie/${this.props.id}`;
    return (
      <tr>
        <td><Link to={path}>{this.props.id}</Link></td>
        <td>{this.props.name}</td>
        <td>{this.props.Release}</td>
        <td>{this.props.Rating}</td>
      </tr>
    );
  }
}
export default Movie;


