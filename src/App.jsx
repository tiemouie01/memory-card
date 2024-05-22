import { useState, useEffect } from "react";
import Game from "./components/Game";
import Header from "./components/Header";
import { fetchMovies } from "./api";

function App() {
  const [movies, setMovies] = useState([]);
  const [movieState, setMovieState] = useState(false);
  const [scores, setScores] = useState({ currentScore: 0, highScore: 0 });

  const updateScores = (newScore) => {
    if (newScore > scores.highScore) {
      setScores({ currentScore: newScore, highScore: newScore });
    } else {
      setScores({ ...scores, currentScore: newScore });
    }
  };

  const updateMovies = (movieList) => {
    setMovieState(true);
    setMovies(movieList);
  };

  const randomizeMovies = () => {
    const moviesCopy = [...movies];
    moviesCopy.sort(() => Math.random() - 0.5);
    setMovies(moviesCopy);
  };

  // API call used to collect movie details from The Movie Database.
  useEffect(() => {
    let isMounted = true;

    fetchMovies(isMounted, updateMovies);

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <Header scores={scores} />
      {movieState ? (
        <Game
          scores={scores}
          updateScores={updateScores}
          movies={movies}
          randomizeMovies={randomizeMovies}
        />
      ) : (
        <section className="flex justify-center items-center gap-2">
          <p className="text-2xl">Loading</p>
          <svg
            className="animate-spin fill-current"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M160-160v-80h110l-16-14q-52-46-73-105t-21-119q0-111 66.5-197.5T400-790v84q-72 26-116 88.5T240-478q0 45 17 87.5t53 78.5l10 10v-98h80v240H160Zm400-10v-84q72-26 116-88.5T720-482q0-45-17-87.5T650-648l-10-10v98h-80v-240h240v80H690l16 14q49 49 71.5 106.5T800-482q0 111-66.5 197.5T560-170Z" />
          </svg>
        </section>
      )}
    </>
  );
}

export default App;
