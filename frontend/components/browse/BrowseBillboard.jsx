import React from "react";

export default class BrowseBillboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="browse-billboard">
        <div className="billboard-wallpaper">
          <div className="wallpaper-image"></div>
          <div className="billboard-hover"></div>
          <div className="billboard-play-logo">
            <img src={window.spartacusTitleImgUrl} alt="" />

            <h4>
              Even the most legendary warriors have a beginning. This one was
              born in blood. Lots and lots of blood.
            </h4>

            <button>Play</button>
            <button>More Info</button>
          </div>
        </div>
      </div>
    );
  }
}
