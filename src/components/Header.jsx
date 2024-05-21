/* eslint-disable react/prop-types */
const Header = ({ scores }) => {
  const { currentScore, highScore } = scores;

  return (
    <header className={`grid md:grid-cols-2 md:grid-rows-3 gap-4 light`}>
      <h1 className="text-4xl font-semibold md:col-span-2 flex justify-center items-center">
        Timmy&apos;s Movie Memory Cards
      </h1>
      <p className="border text-xl font-semibold dark:text-slate-950 dark:bg-white rounded-xl shadow-lg flex justify-center items-center p-4 lg:ml-8">
        Current Score: {currentScore} {currentScore === 1 ? "point" : "points"}
      </p>
      <p className="border text-xl font-semibold dark:text-slate-950 dark:bg-white rounded-xl shadow-lg flex justify-center items-center p-4 lg:mr-8">
        High Score: {highScore} {highScore === 1 ? "point" : "points"}
      </p>
      <p className="md:col-span-2 flex justify-center items-center">
        Click on the images to get points. Your score will be reset if you click
        on an image more than once.
      </p>
    </header>
  );
};

export default Header;
