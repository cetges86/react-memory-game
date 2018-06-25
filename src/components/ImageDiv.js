import React, { Component } from "react";
import ImgCard from "./ImgCard";
import characters from "../Images.json";


class ImageDiv extends Component {

    // constructor(props) {
    //     super(props);
    // }

    state = {
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
        console.log(JSON.stringify(arr))
        arr.splice(0, 15);
        this.setState({ shuffledArray: arr })
    }

    render() {
        return (
            <div id="pictureContainer" className="container">
                <div className="row h-100 justify-content-center align-items-center">
                    {this.state.shuffledArray.map(char => {
                        return <ImgCard
                            shuffle={this.shuffle}
                            characters={this.characters}
                            {...char} />
                    })}
                </div>
            </div>
        )
    }
}

export default ImageDiv;