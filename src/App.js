import React, { Component } from 'react';
import styles from './App.scss';
import Movie from './Movie';

class App extends Component {
  state = {
  
  }
  
  componentDidMount(){
    this._setMovie()
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, lenght) => {
      return <Movie title={movie.title} poster={movie.poster} key={lenght}/>
    })
    return movies
  }
  
  _setMovie = async () => {
    const movies = await this._callApi()
    console.log(movies)
    this.setState({
      movies
   })
  }


  _callApi = () => {
  return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
  .then(potato => potato.json())
  .then(json => json.data.movies)
  .catch(err => console.log(err))
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
