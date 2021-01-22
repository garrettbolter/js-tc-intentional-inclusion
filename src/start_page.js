import React from 'react';
import { Link } from 'react-router-dom';

class Start extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="top-nav-right">
                    <Link to="/instructions">
                        <div className="right"></div>
                    </Link>
                </div>
                <p id="welcome">welcome to</p>
                <div class="break"></div>
                <h1 id="intentional-inclusion"><b className="red">Intentional</b> <b className="green">Inclusion</b></h1>
                <div class="break"></div>
                <div>
                    <p id="explore" style={{textAlign: "center"}}>Explore the experiences of people living with colorblindness in this interactive, color-matching puzzle game.</p>
                    <div class="break"></div>
                    <p className="p-center">(but be wary, we have some challenges coming your way)</p>
                </div>
                <div class="break"></div>
                <Link to="/instructions">
                    <button type="button" className="buttonn">Get Started</button>
                </Link>
            </div>
        );
    }
}


export default Start;