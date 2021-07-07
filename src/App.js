import './App.css';

import React, { useReducer } from 'react';
import ListOfMovies from './components/ListOfMovies';

export const data = {
  1: {"name":"The Last Samurai","rating":1, id: 1},
  2: {"name":"Harold and Kumar Go To White Castle","rating":2, id: 2},
  3: {"name":"Nick Danger, Third Eye","rating":3, id: 3},
  4: {"name":"The Beast of Yucca Flats","rating":3, id: 4},
  5: {"name":"Manos: Hands of Fate","rating":5, id: 5},
  6: {"name":"El Topo","rating":3, id: 6},
  7: {"name":"Garfield: The Movie","rating":4, id: 7},
  8: {"name":"Kangaroo Jack","rating":4, id: 8},
  9: {"name":"Akira","rating":4, id: 9},
  10: {"name":"Ghost in the Shell","rating":1, id: 10},
  11: {"name":"Chicken Run","rating":5, id: 11}
};

function movieListReducer(state, action) {
  switch (action.type) {
    case 'updateMovieRating':
      return state;
    default:
      throw new Error();
  }
}

const MovieList = () => {
  // const [movieListState, dispatch] = useReducer(movieListReducer, data);
  return (
    <div className="md:container grid justify-items-center">
      <h1 className="titles">List Of Movies</h1>
      <ListOfMovies 
        listOfMovies={data}
      />     
    </div>
  )
};

export default () => <MovieList />;