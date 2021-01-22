import React from "react";
import "./ColorBlock.css";

class ColorBlock extends React.Component {
  render() {
    // const index = NCB_colors[Math.floor(Math.random() * NCB_colors.length)];
    const index = this.props.colorValue;
    const round = this.props.round;
    // const class_name = this.props.colorValue + " " + this.props.round;

    let colorText;

    switch (index) {
      case "NCB_red":
        colorText = "Red";
        break;
      case "CB_red":
        colorText = "Red";
        break;
      case "NCB_orange":
        colorText = "Orange";
        break;
      case "CB_orange":
        colorText = "Orange";
        break;
      case "NCB_yellow":
        colorText = "Yellow";
        break;
      case "CB_yellow":
        colorText = "Yellow";
        break;
      case "NCB_green":
        colorText = "Green";
        break;
      case "CB_green":
        colorText = "Green";
        break;
      default:
        colorText = "";
    }

    // return <div className={index} onClick={() => this.printColor(index)}></div>;
    return (
      <div className="color-square">
        <div
          className={index}
          onClick={() => this.props.colorMatch(index, this.props.refColor)}
        ></div>
      </div>
    );
  }
}

export default ColorBlock;
