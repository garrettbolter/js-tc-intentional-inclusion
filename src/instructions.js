import React from 'react';
import {Link, Route} from 'react-router-dom';

export const global_scores = [];


class Instructions extends React.Component{
    render() {
        global_scores.splice(0, global_scores.length)
        return (
            <div className="game">
                <div className="top-nav-left">
                    <Link to="/">
                        <div className="left"></div>
                    </Link>
                </div>
                <h1>Instructions</h1>
                <div className="break"></div>
                <p style={{margin: "10px 20% 18px"}}>There will be three rounds. Your objective for each round is to select the square that matches the color specified in the top left corner. You have unlimited attempts. Good luck!</p>
                <Link to="/round1">
                    <button type="button" className="buttonn">Start</button>
                </Link>

            </div>
        );
    }
}


export default Instructions;