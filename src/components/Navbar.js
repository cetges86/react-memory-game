import React from "react";
import ScoreCounter from './ScoreCounter';
import Message from './Message';
import ImageDiv from './ImageDiv';

const Navbar = () => (
    <nav className="navbar navbar-light bg-light">
        <span className="col navbar-brand mb-0 h1">Clicky Game</span>
        <Message message="Click on a picture to start the game!" />
        <ScoreCounter score={ImageDiv.score}/>

    </nav>
)

export default Navbar;