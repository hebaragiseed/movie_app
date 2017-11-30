import React from 'react';
import styles from './Movie.scss';
import PropTypes from 'prop-types';

function Movie({title, poster}) {
  return (
    <div>
      <h1>{title}</h1>
      <Poster poster={poster} />
    </div>
  )
}

function Poster({poster}) {
  return (
    <img src={poster} alt="" />
  )
}
Movie.propType = {
  movie: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
}
Poster.propTypes = {
  poster: PropTypes.string.isRequired
}
export default Movie;