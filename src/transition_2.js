import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Route} from 'react-router-dom';

class Transition2 extends React.Component{
    render() {
        return (
            <div className="game transition">
                <p>How did you do? Let's move onto the last round.</p>
                <div className="break"></div>
                <Link to="/round3">
                    <button className="buttonn" type="button">Let's Go!</button>
                </Link>
            </div>
        );
    }
}

export default Transition2;