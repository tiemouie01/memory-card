/* eslint-disable react/prop-types */
import Card from "./Card";

const Game = ({ scores, updateScores, movies, randomizeMovies }) => {
  const movieList = movies.map((movie) => (
    <Card
      key={movie.id}
      title={movie.original_title}
      posterPath={movie.poster_path}
      randomizeMovies={randomizeMovies}
    />
  ));

  return <section>{movieList}</section>;
};

export default Game;
