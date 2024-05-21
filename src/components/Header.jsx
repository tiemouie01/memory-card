/* eslint-disable react/prop-types */
const Header = ({ scores }) => {
  const { currentScore } = scores;
  const { highScore } = scores;

  return (
    <header>
      <h1>Movie Memory Card Game</h1>
      <p>Current Score: {currentScore}</p>
      <p>High Score: {highScore}</p>
      <p>
        Click on the images to get points. Your score will be reset if you click
        on an image more than once.
      </p>
    </header>
  );
};

export default Header;
