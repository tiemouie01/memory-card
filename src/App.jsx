import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import { fetchMovies } from "./api";

function App() {
  const [movies, setMovies] = useState([]);

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
      <div>{movieList}</div>
    </>
  );
}

export default App;
