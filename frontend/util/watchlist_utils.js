export const createLike = (like) =>
  $.ajax({
    method: "POST",
    url: "/api/likes",
    data: {
      like,
    },
  });

export const removeWatchlist = (like) =>
  $.ajax({
    method: "DELETE",
    url: "/api/likes",
    data: {
      like,
    },
  });
