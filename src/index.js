import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Start from "./start_page.js";
import Scoreboard from "./scores.js";
import Instructions from "./instructions.js";
import NCB_Activity from "./components/Activity/NCB_Activity";
import CB_Activity from "./components/Activity/CB_Activity";
import ActionPage from "./call_to_action.js";
import Transition1 from "./transition_1.js";
import Transition2 from "./transition_2.js";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
// import './assets/css/fonts.css';


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      my_state: 1,
    };
  }

  render() {
    return (
      <Router>
        <div className="center-box">
          <Switch>
            <Route exact path="/scores" component={Scoreboard} />
            {/* <Route path="/scores" render={() => <Scoreboard scores={props}/>} /> */}
            <Route exact path="/transition1" component={Transition1} />
            <Route exact path="/transition2" component={Transition2} />
            <Route exact path="/cta" component={ActionPage} />
            {/* <Route exact path="/activity" component={Activity}/> */}
            <Route
              exact
              path="/round3"
              render={(props) => <CB_Activity {...props} round={3} />}
            />

            <Route
              exact
              path="/round2"
              render={(props) => <CB_Activity {...props} round={2} />}
            />

            <Route
              exact
              path="/round1"
              render={(props) => <NCB_Activity {...props} round={1} />}
            />

            <Route exact path="/instructions" component={Instructions} />
            <Route exact path="/" component={Start} />
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));
