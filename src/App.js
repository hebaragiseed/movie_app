import React, { Component } from 'react';
import styles from './App.scss';
import Movie from './Movie';

class App extends Component {
  state = {
  
  }
  
  componentDidMount(){
    fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(potato => potato.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
  }

  _renderMovies() {
    const movies = this.state.movies.map((movie, lenght) => {
      return <Movie title={movie.title} poster={movie.poster} key={lenght}/>
    })
    return movies
  }
  render() {
    return (
      <div>
       {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
