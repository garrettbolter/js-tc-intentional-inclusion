import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';



class ActionPage extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="top-nav-left">
                    <Link to="/scores">
                        <div className="left"></div>
                    </Link>
                </div>
                <h1>Thank You for Playing!</h1>
                <p style={{margin: "10px 20%"}}> As you realized while playing this game, the second round was probably more difficult than the first. That's because it simulated what someone with deuteranopia, the most common type of color blindness, might see when they play this game. In the third round, you saw how accessibility features can be implemented to make it easier for those with color-blindness to play. This was only one of several ways accessibility can be implemented in web content and there is much more work to be done.</p>
                <p style={{margin: "10px 20%"}}>Accessibility is how well an environment can be used by as many people as possible. Imagine only being able to visit a limited amount of sites because few people consider your needs when designing the page. And it wouldn't be just you; approximately 300 million people in the world live with some form of colorblindness. On top of that, color-blindness is only one of many factors that can hinder someone's ability to access web content.</p>
                <p style={{margin: "10px 20%"}}>Accessibility needs to be at the forefront of the minds of designers because the digital world should be available for all to use. Maybe one day you can help advance this effort to bring the web to everyone. Below are some helpful links to learn more about accessibility:</p>
                <div className="break"></div>
                <div id="cta-links">
                    <a href="https://www.youtube.com/watch?v=hufMi9LZX2I" target="blank"><button className="buttonn">What is Accessibility?</button></a>
                    <a href="https://www.youtube.com/watch?v=3f31oufqFSM" target="blank"><button className="buttonn">Types of Accessibility</button></a>
                    <Link to="/">
                        <button type="button" className="buttonn">Play Again</button>
                    </Link>
                </div>

            </div>

        );
    }
}


export default ActionPage;