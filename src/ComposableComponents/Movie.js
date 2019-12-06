import React from 'react';

const Movie = ({id, name, Release, Rating}) => (
  <tr>
    <td>{id}</td>
    <td>{name}</td>
    <td>{Release}</td>
    <td>{Rating}</td>

  </tr>
);

export default Movie;