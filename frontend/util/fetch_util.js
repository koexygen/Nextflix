export const getMovies = () =>
  $.ajax({
    method: "GET",
    url: "/api/movies",
  });
