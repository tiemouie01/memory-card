/* eslint-disable react/prop-types */
const Card = ({ title, posterPath }) => {
  const path = `https://image.tmdb.org/t/p/w185/${posterPath}`;

  return (
    <article className="card">
      <img src={path} alt={`${title} poster`} />
      <p>{title}</p>
    </article>
  );
};

export default Card;
