import React from "react";
import ScoreCounter from './ScoreCounter';
const Navbar = () => (
    <nav className="navbar navbar-light bg-light">
            <span className="col navbar-brand mb-0 h1">Clicky Game</span>
            <span className="col text-center h4">Click an Image to Begin!</span>
            <ScoreCounter />
       
    </nav>
)

export default Navbar;