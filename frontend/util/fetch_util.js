export const getMovies = () =>
  $.ajax({
    method: "GET",
    url: "/api/movies",
  });

export const getWatchlists = () => {
  return $.ajax({
    method: "GET",
    url: "/api/watchlist",
  });
};
