/* eslint-disable react/prop-types */
const Card = ({ title, posterPath, clickMovie }) => {
  const path = `https://image.tmdb.org/t/p/w185/${posterPath}`;

  return (
    <button
      className="dark:bg-slate-600 bg-slate-200 p-4 m-2 rounded-lg shadow-lg flex-1 lg:min-w-48 min-w-32 max-w-48 transition-all hover:translate-y-[-0.5rem] dark:hover:shadow-white hover:shadow-slate-500"
      onClick={() => {
        clickMovie(title);
      }}
    >
      <img src={path} alt={`${title} poster`} />
      <p className="mt-2">{title}</p>
    </button>
  );
};

export default Card;
