import React from "react";
import "../css/Background.scss";

const Background = (props) => {
  const makeCircles = () => {
    const circles = [];
    for (let i = 1; i <= 100; i++) {
      circles.push(
        <div key={i} className="circle-container">
          <div className="circle"></div>
        </div>
      );
    }
    return circles;
  };

  return <div className="container">{makeCircles()}</div>;
};

export default Background;
