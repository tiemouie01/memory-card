import { useState, useEffect } from "react";
import "./App.css";
import Game from "./components/Game";
import Header from "./components/Header";
import { fetchMovies } from "./api";

function App() {
  const [movies, setMovies] = useState([]);
  const [scores, setScores] = useState({});

  const updateScores = (currentScore, highScore) => {
    setScores({ currentScore, highScore });
  };

  // API call used to collect movie details from The Movie Database.
  useEffect(() => {
    let isMounted = true;

    fetchMovies(isMounted, setMovies);

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <Header scores={scores}/>
      <Game scores={scores} updateScores={updateScores} movies={movies}/>
    </>
  );
}

export default App;
