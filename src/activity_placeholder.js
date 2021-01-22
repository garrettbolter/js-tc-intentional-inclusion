import React from "react";
import Scoreboard from "./scores.js";
import { Link, Switch, Route, Redirect, withRouter } from "react-router-dom";

import ColorBlock from "./components/colorBlock/ColorBlock";

export const global_scores = [];
class Activity extends React.Component {
  constructor(props) {
    super(props);
  }

  handleButtonClick() {
    if (this.props.round == 1) {
      this.props.history.push("/transition1");
    } else if (this.props.round == 2) {
      this.props.history.push("/transition2");
    } else {
      this.props.history.push("/scores");
    }
  }

  shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  checkColorMatch = (color, refColor) => {
    console.log(color);
    console.log(color);
    console.log(refColor);

    if ((color === "NCB_red" || color === "CB_red") && refColor === "Red") {
      console.log("YAY");
    } else if (
      (color === "NCB_orange" || color === "CB_orange") &&
      refColor === "Orange"
    ) {
      console.log("YAY");
    } else if (
      (color === "NCB_yellow" || color === "CB_yellow") &&
      refColor === "Yellow"
    ) {
      console.log("YAY");
    } else if (
      (color === "NCB_green" || color === "CB_green") &&
      refColor === "Green"
    ) {
      console.log("YAY");
    } else {
      console.log("Uhhh");
    }
  };

  render() {
    let refColor = ["Red", "Orange", "Yellow", "Green"];
    let NCB_colors = ["NCB_red", "NCB_orange", "NCB_yellow", "NCB_green"];
    let CB_colors = ["CB_red", "CB_orange", "CB_yellow", "CB_green"];

    let refIndex = Math.floor(Math.random() * 5);

    this.shuffle(NCB_colors);
    this.shuffle(CB_colors);

    global_scores.push({
      round: this.props.round,
      attempts: 2,
    });
    return (
      <div className="game">
        <p>Round {this.props.round}</p>

        <div className="stat">
          <p>{refColor[refIndex]}</p>

          <div className="stat-count">
            <p>Correct: {this.props.correctAnswers}</p>
            <p>Inorrect: {this.props.incorrectAnswers}</p>
          </div>
        </div>

        <div className="color-grid">
          <div className="row">
            <ColorBlock
              colorValue={NCB_colors[0]}
              refColor={refColor[refIndex]}
              colorMatch={this.checkColorMatch}
            />
            <ColorBlock
              colorValue={NCB_colors[1]}
              refColor={refColor[refIndex]}
              colorMatch={this.checkColorMatch}
            />
            <ColorBlock
              colorValue={NCB_colors[2]}
              refColor={refColor[refIndex]}
              colorMatch={this.checkColorMatch}
            />
            <ColorBlock
              colorValue={NCB_colors[3]}
              refColor={refColor[refIndex]}
              colorMatch={this.checkColorMatch}
            />
          </div>
        </div>

        <button
          type="button"
          className="buttonn"
          onClick={this.handleButtonClick.bind(this)}
        >
          Move On
        </button>
      </div>
    );
  }
}

//export default Activity;
export default withRouter(Activity);
