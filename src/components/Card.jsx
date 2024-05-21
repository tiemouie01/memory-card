/* eslint-disable react/prop-types */
const Card = ({ title, posterPath, randomizeMovies }) => {
  const path = `https://image.tmdb.org/t/p/w185/${posterPath}`;

  return (
    <button
      className="card"
      onClick={() => {
        randomizeMovies();
      }}
    >
      <img src={path} alt={`${title} poster`} />
      <p>{title}</p>
    </button>
  );
};

export default Card;
