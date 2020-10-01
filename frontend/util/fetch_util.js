export const getMovies = () =>
  $.ajax({
    method: "GET",
    url: "/api/movies",
  });

export const getMovie = (id) =>
  $.ajax({
    method: "GET",
    url: `/api/movies/${id}`,
  });

export const getWatchlists = () => {
  return $.ajax({
    method: "GET",
    url: "/api/watchlist",
  });
};
