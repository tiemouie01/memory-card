/* eslint-disable react/prop-types */
import Card from "./Card";

const Game = ({ scores, updateScores, movies, randomizeMovies }) => {
  const currentScore = scores.currentScore;

  const movieList = movies.map((movie) => (
    <Card
      key={movie.id}
      title={movie.original_title}
      posterPath={movie.poster_path}
      score={currentScore}
      updateScores={updateScores}
      randomizeMovies={randomizeMovies}
    />
  ));

  return <section>{movieList}</section>;
};

export default Game;
