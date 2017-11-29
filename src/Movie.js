import React, { Component }  from 'react';
import styles from './Movie.scss';
import PropTypes from 'prop-types';

class Movie extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Poster poster={this.props.poster} />
      </div>
    );
  }
}

class Poster extends Component {
  static propTypes = {
    poster: PropTypes.string.isRequired
  }
  render() {
    console.log(this.props)
    return (
      <img src={this.props.poster} alt="" />
    );
  }
}

export default Movie;