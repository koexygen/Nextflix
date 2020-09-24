import React from "react";

export default class BrowseBillboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="browse-billboard">
        <div className="billboard-wallpaper">
          <div className="billboard-hover"></div>
          <div className="wallpaper-image">
            <img src={window.billboardImgUrl} alt="" />
          </div>
          <div className="billboard-play-logo">
            <img src={window.spartacusTitleImgUrl} alt="" />

            <h4>
              Even the most legendary warriors have a beginning. This one was
              born in blood. Lots and lots of blood.
            </h4>

            <button className="billboard-play">Play</button>
            <button className="billboard-info">More Info</button>
          </div>
        </div>
      </div>
    );
  }
}
