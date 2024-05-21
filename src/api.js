const getConfig = async () => {
  const url = "https://api.themoviedb.org/3/configuration";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDg4MjdlYWRhNzFkMzkyOTA5NGE3ODk1YTQ4NjFjYSIsInN1YiI6IjY2NDliODBmNTliMzEwNDVjNjU0M2IyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qwE9RUbzrvZKHbYhpS6-ahzavqKduEPOI0f04J3ApSc",
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err));
};

const getData = async (page = 1) => {
  const url = `https://api.themoviedb.org/3/account/21277388/favorite/movies?language=en-US&page=${page}&sort_by=created_at.asc`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDg4MjdlYWRhNzFkMzkyOTA5NGE3ODk1YTQ4NjFjYSIsInN1YiI6IjY2NDliODBmNTliMzEwNDVjNjU0M2IyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qwE9RUbzrvZKHbYhpS6-ahzavqKduEPOI0f04J3ApSc",
    },
  };

  const response = await fetch(url, options);
  const movies = await response.json();
  return movies.results;
};

const fetchMovies = async (isMounted, setMovies) => {
  const moviesReceived = [];
  const pages = Array.from({ length: 4 }, (_, i) => i + 1); // creates an array [1, 2, 3, 4]

  await Promise.all(
    pages.map(async (page) => {
      const response = await getData(page);
      if (isMounted) {
        console.log(response);
        moviesReceived.push(...response);
      }
    })
  );

  if (isMounted) {
    setMovies(moviesReceived);
  }
};

export { fetchMovies, getData, getConfig };
