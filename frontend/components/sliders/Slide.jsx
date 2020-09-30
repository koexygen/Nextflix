import React from "react";

const imgBasePath = "https://image.tmdb.org/t/p/w500/";

const Slide = (props) => {
  // console.log(props.tmdb);
  return (
    <div>
      <h1>Popular Movies</h1>
      <ul className={"slide-container"}>
        <button
          className="slider-arrow slider-arrow--prev"
          onClick={props.prevSlide}
        >
          <span>
            <svg
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
              ></path>
            </svg>
          </span>
        </button>

        {props.movies.map((movie, idx) => {
          return (
            <li className="slide-movie" key={idx}>
              <img
                src={
                  props.tmdb
                    ? `${imgBasePath + movie.poster_path}`
                    : movie.image_url
                }
                alt="a"
              />
            </li>
          );
        })}

        <button
          className="slider-arrow slider-arrow--next"
          onClick={props.nextSlide}
        >
          <span>
            <svg
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
              ></path>
            </svg>
          </span>
        </button>
      </ul>
    </div>
  );
};

export default Slide;
