import React from "react";
import { Link, Switch, Route, Redirect, withRouter } from "react-router-dom";

import ColorBlock from "../colorBlock/ColorBlock";
import ColorBlockHover from "../colorBlock/ColorBlockHover";
import { global_scores } from "../../instructions.js";
import "./Activity.css";

class CB_Activity extends React.Component {
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

    if (this.props.round == 2) {
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
    console.log(refColor);

    if (color === "CB_red" && refColor === "Red") {
      this.setState({ status: "YAY" });
      this.moveOn();
    } else if (color === "CB_orange" && refColor === "Orange") {
      this.setState({ status: "YAY" });
      this.moveOn();
    } else if (color === "CB_yellow" && refColor === "Yellow") {
      this.setState({ status: "YAY" });
      this.moveOn();
    } else if (color === "CB_green" && refColor === "Green") {
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
    let refColor = ["Red", "Orange", "Green"];
    let CB_colors = ["CB_red", "CB_orange", "CB_yellow", "CB_green"];

    let refIndex = Math.floor(Math.random() * 3);

    this.shuffle(CB_colors);


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
          {this.props.round == 2 && <div className="row">
            <ColorBlock
              colorValue={CB_colors[0]}
              refColor={refColor[refIndex]}
              colorMatch={this.checkColorMatch}
            />
            <ColorBlock
              colorValue={CB_colors[1]}
              refColor={refColor[refIndex]}
              colorMatch={this.checkColorMatch}
            />
            <ColorBlock
              colorValue={CB_colors[2]}
              refColor={refColor[refIndex]}
              colorMatch={this.checkColorMatch}
            />
            <ColorBlock
              colorValue={CB_colors[3]}
              refColor={refColor[refIndex]}
              colorMatch={this.checkColorMatch}
            />
          </div>
          }
          {this.props.round == 3 && <div className="row">
            <ColorBlockHover
              colorValue={CB_colors[0]}
              refColor={refColor[refIndex]}
              colorMatch={this.checkColorMatch}
            />
            <ColorBlockHover
              colorValue={CB_colors[1]}
              refColor={refColor[refIndex]}
              colorMatch={this.checkColorMatch}
            />
            <ColorBlockHover
              colorValue={CB_colors[2]}
              refColor={refColor[refIndex]}
              colorMatch={this.checkColorMatch}
            />
            <ColorBlockHover
              colorValue={CB_colors[3]}
              refColor={refColor[refIndex]}
              colorMatch={this.checkColorMatch}
            />
          </div>
          }
        </div>
      </div>
    );
  }
}

//export default Activity;
export default withRouter(CB_Activity);
