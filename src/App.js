import React, { Component } from 'react';
import styles from './App.scss';
import Movie from './Movie';



class App extends Component {
  state = {
  
  }
  
  componentDidMount(){
    setTimeout(() => {
      this.setState({       
        movies: [          
          {
            title: 'Note Book',
            poster: 
            'http://mblogthumb1.phinf.naver.net/20160201_152/seulgi0417_1454298381024kF3cL_JPEG/%BF%B5%C8%AD_%B3%EB%C6%AE%BA%CF_%B8%ED%B4%EB%BB%E7_%281%29.jpg?type=w800',
          },
          {
            title: 'If Only',
            poster: 
            'https://pbs.twimg.com/media/CyHBeAYUUAERFE5.jpg',
          },
          {
            title: '500일의 썸머',
            poster: 'http://cfile1.uf.tistory.com/image/25600750576DDE111BD9F0',
          },
          {
            title: '어바웃 타임',
            poster: 'http://cfile26.uf.tistory.com/image/236A5E4D52D6B15B03FD29'  
          },
          {
            title: 'BEGIN AGAIN',
            poster: 'http://cfile21.uf.tistory.com/image/24570A3854385A6026348E'
          },
        ]
      }) 
    },4000)
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
