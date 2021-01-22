import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Route} from 'react-router-dom';

class Transition1 extends React.Component{
    render() {
        return (
            <div className="game transition">
                <p>Nice job! Now let's do that again, but with a little bit of a challenge. How will you do this time around?</p>
                <div className="break"></div>
                <Link to="/round2">
                    <button className="buttonn" type="button">Let's Go!</button>
                </Link>
            </div>
        );
    }
}


export default Transition1;