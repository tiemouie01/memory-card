import { useState, useEffect } from "react";
import "./App.css";
import Game from "./components/Game";
import Header from "./components/Header";
import { fetchMovies } from "./api";

function App() {
  const [movies, setMovies] = useState([]);
  const [scores, setScores] = useState({ currentScore: 0, highScore: 0});

  const updateScores = (newScore) => {
    if (newScore > scores.highScore) {
      setScores({ currentScore: newScore, highScore: newScore });
    } else {
      setScores({ ...scores, currentScore: newScore });
    }
  };

  const randomizeMovies = () => {
    const moviesCopy = [...movies];
    moviesCopy.sort(() => Math.random() - 0.5);
    setMovies(moviesCopy);
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
      <Header scores={scores} />
      <Game
        scores={scores}
        updateScores={updateScores}
        movies={movies}
        randomizeMovies={randomizeMovies}
      />
    </>
  );
}

export default App;
