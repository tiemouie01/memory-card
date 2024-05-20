async function getConfig() {
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
}

async function getData() {
  const url =
    "https://api.themoviedb.org/3/account/21277388/favorite/movies?language=en-US&page=1&sort_by=created_at.asc";
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
}

export { getData, getConfig };
