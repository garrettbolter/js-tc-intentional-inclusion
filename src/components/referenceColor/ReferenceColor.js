import React from "react";
import "./referenceColor.css";

class ReferenceColor extends React.Component {
  printColor = (color) => {
    console.log(color);
  };

  render() {
    const color = [
      "color-1",
      "color-2",
      "color-3",
      "color-4",
      "color-5",
      "color-6",
      "color-7",
      "color-8",
    ];

    const referenceIndex = color[Math.floor(Math.random() * color.length)];
    console.log(referenceIndex);

    return (
      <div>
        {/* <span>Red</span> */}
        <span>
          <div
            className={referenceIndex}
            onClick={() => this.printColor(referenceIndex)}
          ></div>
        </span>
      </div>
    );

    // return <div className={index} onClick={() => this.printColor(index)}></div>;
  }
}

export default ReferenceColor;
