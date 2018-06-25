import React, { Component } from "react";
import ImgCard from "./ImgCard";
import characters from "../Images.json";


class ImageDiv extends Component {

    // constructor(props) {
    //     super(props);
    // }

    state = {
        shuffledArray: [],
        score: 0,
        topScore: 0
    }

    componentDidMount() {
        this.shuffle(characters);
    }

    shuffle = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        let newArr = arr.slice(15);
        //console.log(newArr)
        this.setState({ shuffledArray: newArr })
    }

    handleIncrement = () => {
        this.setState({ score: this.state.score + 1 });
    }

    gameReset = () => {
        this.setState({
            topScore: this.state.score,
            score: 0,
        })
        this.shuffle(characters);
    }

    render() {
        return (
            <div id="pictureContainer" className="container">
                <h4 className="text-center">Current Score: {this.state.score} | Top Score: {this.state.topScore}</h4>
                <div className="row h-100 justify-content-center align-items-center">
                    {this.state.shuffledArray.map(char => {
                        return <ImgCard
                            key = {char.id}
                            gameReset={this.gameReset}
                            handleIncrement={this.handleIncrement}
                            shuffle={this.shuffle}
                            characters={this.characters}
                            score={this.state.score}
                            {...char} />
                    })}
                </div>
            </div>
        )
    }
}

export default ImageDiv;