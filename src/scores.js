import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';
import ActionPage from './call_to_action.js';
import { global_scores } from './instructions.js';

class Scoreboard extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        let rows = global_scores.map(score =>
            <BoardRow round={score.round} attempts={score.attempts} />
        );

        return (
            <div className="game">
                <div className="top-nav-right">
                    <Link to="/cta">
                        <div className="right"></div>
                    </Link>
                </div>
                <h1>Scores</h1>
                <div className="break"></div>
                <table className="scoreboard">
                    <tr>
                        <th>Round</th>
                        <th>Attempts</th>
                    </tr>
                    {rows}
                </table>
                <div className="break"></div>
                <Link to="/cta">
                    <button type="button" className="buttonn">Next</button>
                </Link>
            </div>
        );
    }
}


function BoardRow(props) {
    return (

        <tr className="board-row">
            <td>{props.round}</td>
            <td>{props.attempts}</td>
        </tr>

    );
}

BoardRow.propTypes = {
    round: PropTypes.number.isRequired,
    attempts: PropTypes.number.isRequired,
};

export default Scoreboard;






