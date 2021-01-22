import React, { useState } from 'react';
import "./ColorBlock.css";


class ColorBlock3 extends React.Component {
  render() {
    // const index = NCB_colors[Math.floor(Math.random() * NCB_colors.length)];
    const index = this.props.colorValue;
    const round = this.props.round;
    const [isShown, setIsShown] = useState(false);

    // return <div className={index} onClick={() => this.printColor(index)}></div>;
    return (
      <div>
      <div
        className={index}
        onClick={() => this.props.colorMatch(index, this.props.refColor)}
      >
      </div>{isShown && (
        <div>
          I'll appear when you hover over the button.
        </div>
      )}
      </div>
    );
  }
}

export default ColorBlock3;
