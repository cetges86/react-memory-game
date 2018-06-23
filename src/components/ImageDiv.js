import React, { Component } from "react";
import ImgCard from "./ImgCard";
import characters from "../Images.json";


class ImageDiv extends Component {

    state = {
        clicked: false,
        shuffledArray: []
    }

    componentDidMount() {
        this.shuffle(characters);
    }

    shuffle = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        console.log(arr)
        arr.splice(0,7);
        this.setState({ shuffledArray: arr })
    }

    render() {
        return (
            <div className="container">
                {this.state.shuffledArray.map(char => {
                    
                    return <ImgCard {...char} />
                })}
            </div>
        )
    }
}

export default ImageDiv;