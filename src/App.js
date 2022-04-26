import { useState } from "react";
import './App.css';
import {data }from "./data"
import MovieList from "./components/MovieList"
import Filter from "./components/Filter"
import Infos from "./components/Infos"
import { Router ,Route, Routes} from "react-router-dom";
function App() {
  const [movies, setMovies] = useState(data);
  const [titler, setTitler] = useState("");
  const [rater, setRater] = useState(0)
let hello="hello"

  const ChangeTitle = (e) => {
    setTitler(e.target.value);
  };
  const ChangeRate = (newRating) => {
    setRater(newRating)
  
  };
  const AddMovie = (newFilm) => {
    setMovies([...movies, newFilm]);
    console.log(movies);
  };

return ( 
   



  <><Routes>
    <Route
    path='/movieapp_react_hooks_router'
    element={<div>
      <Filter ChangeTitle={ChangeTitle} titlee={titler} ChangeRate={ChangeRate} AddMovie={AddMovie} />

      <MovieList
        movies={movies.filter((movie) => movie.title.trim().toLowerCase().includes(titler.trim().toLowerCase()) && movie.rate >= rater
        )} />
    </div>} />
    
    
    
    <Route
    path='/'
    element={<div>
      <Filter ChangeTitle={ChangeTitle} titlee={titler} ChangeRate={ChangeRate} AddMovie={AddMovie} />

      <MovieList
        movies={movies.filter((movie) => movie.title.trim().toLowerCase().includes(titler.trim().toLowerCase()) && movie.rate >= rater
        )} />
    </div>} />
      <Route path='/Infos/:id' element={<Infos movies={movies} />} />
    </Routes></>
);
}

export default App;
