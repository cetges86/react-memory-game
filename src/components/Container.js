import React from 'react';
import Navbar from './Navbar';
import ImageCard from './ImageDiv';

const Container = () => (
    <div>
        <Navbar />
        <div className="jumbotron">
            <h1 className="text-center"> Clicky Game!!</h1>
            <h6 className="text-center">Click on an image to earn points, but don't click on any more than once!</h6>
        </div>
        <div className = "container">
        <ImageCard />
        </div>
    </div>
);

export default Container;