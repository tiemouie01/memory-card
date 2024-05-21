import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
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

  const movieList = movies.map((movie) => (
    <Card
      key={movie.id}
      title={movie.original_title}
      posterPath={movie.poster_path}
    />
  ));

  return (
    <>
      <Header scores={scores}/>
      <div>{movieList}</div>
    </>
  );
}

export default App;
