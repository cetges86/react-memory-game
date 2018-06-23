import React, { Component } from "react";
import ImgCard from "./ImgCard";
import characters from "../Images.json";


class ImageDiv extends Component {

    state = {
        clicked: false
    }

    componentDidMount() {
        this.randomArray(16, 27);
    }

    shuffle = (a) => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    // randomArray = (length, max) => {
    //     let idArray = [...new Array(length)]
    //         .map(() => Math.round(Math.random() * max));
    //     this.getRandomImgs(idArray);
    // }


    render() {
        return (
            <div className="container">

                {characters.map(char => {
                    return <ImgCard {...char} />
                })}


            </div>
        )
    }
}

export default ImageDiv;