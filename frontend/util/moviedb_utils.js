export const fetchPopular = (key) => {
  return $.ajax({
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  });
};
