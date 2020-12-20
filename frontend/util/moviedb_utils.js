export const fetchPopular = (key) => {
  return $.ajax({
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  });
};

export const fetchTopRated = (key) => {
  return $.ajax({
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  });
};

export const fetchNowPlaying = (key) => {
  return $.ajax({
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  });
};

export const getMovieTrailer = (movieId, key) => {
  return $.ajax({
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}`,
  });
};
