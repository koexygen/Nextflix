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
        </div>
      </div>
    );
  }
}
