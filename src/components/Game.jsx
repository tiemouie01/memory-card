/* eslint-disable react/prop-types */
import Card from "./Card";
import { useState } from "react";

const Game = ({ scores, updateScores, movies, randomizeMovies }) => {
  const [selectedMovies, setSelectedMovies] = useState([]);
  const currentScore = scores.currentScore;

  const clickMovie = (movieTitle) => {
    // Randomize the order of the movies.
    randomizeMovies();

    if (selectedMovies.includes(movieTitle)) {
      //If movie has already been selected, reset the score and empty the selected movie list.
      updateScores(0);
      setSelectedMovies([]);
    } else {
      //If movie has not been selected, increment the current score and add the movie to the selected list.
      const selectedMoviesCopy = [...selectedMovies];
      selectedMoviesCopy.push(movieTitle);
      updateScores(currentScore + 1);
      setSelectedMovies(selectedMoviesCopy);
    }
  };

  const movieList = movies.map((movie) => (
    <Card
      key={movie.id}
      title={movie.original_title}
      posterPath={movie.poster_path}
      clickMovie={clickMovie}
    />
  ));

  return <section>{movieList}</section>;
};

export default Game;
