import React from "react";

const imgBasePath = "https://image.tmdb.org/t/p/w500/";

const Slide = (props) => {
  // console.log(props.tmdb);
  return (
    <ul className={"slide-container"}>
      <span className="slider-arrow" onClick={props.prevSlide}>
        {"<"}
      </span>

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

      <span className="slider-arrow" onClick={props.nextSlide}>
        {">"}
      </span>
    </ul>
  );
};

export default Slide;
