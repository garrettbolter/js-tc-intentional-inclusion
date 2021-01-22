import React from "react";
import { Link, Switch, Route, Redirect, withRouter } from "react-router-dom";

import ColorBlock from "../colorBlock/ColorBlock";
import { global_scores } from "../../instructions.js";
import "./Activity.css";

class NCB_Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
      attempts: 1,
    };
    this.moveOn = this.moveOn.bind(this);
  }

  moveOn() {
    global_scores.push({
      round: this.props.round,
      attempts: this.state.attempts,
    });
    this.props.history.push("/transition1");
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
    if (color === "NCB_red" && refColor === "Red") {
      this.setState({ status: "YAY" });
      this.moveOn();
    } else if (color === "NCB_orange" && refColor === "Orange") {
      this.setState({ status: "YAY" });
      this.moveOn();
    } else if (color === "NCB_yellow" && refColor === "Yellow") {
      this.setState({ status: "YAY" });
      this.moveOn();
    } else if (color === "NCB_green" && refColor === "Green") {
      this.setState({ status: "YAY" });
      this.moveOn();
    } else {
      this.setState({
        status: "",
        attempts: this.state.attempts + 1,
      });
    }
  };

  render() {
    let refColor = ["Red", "Orange", "Green", "Yellow"];
    let NCB_colors = ["NCB_red", "NCB_orange", "NCB_yellow", "NCB_green"];

    let refIndex = Math.floor(Math.random() * 4);

    this.shuffle(NCB_colors);

    return (
      <div className="activity">
        <div className="stat">
          <div>
            <p className="color-p">{refColor[refIndex]}</p>
          </div>
          <div className="round-attempts">
            <p>Round {this.props.round}</p>
            <div className="break"></div>
            <p>Attempts: {this.state.attempts - 1}</p>
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
      </div>
    );
  }
}

//export default Activity;
export default withRouter(NCB_Activity);
