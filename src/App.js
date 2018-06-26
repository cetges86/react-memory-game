import React, { Component } from "react";
import Navbar from "./components/Navbar";
import ImgCard from "./components/ImgCard";
import Modal from "./components/Modal";
import characters from "./Images.json";
import logo from "./favicon.ico"
import simpsons from "./simpsons-logo.png";

class App extends Component {

    state = {
        shuffledArray: [],
        score: 0,
        topScore: 0,
        message: "Click a picture to begin!",
        unchosenChar: characters
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
        this.setState({
            score: this.state.score + 1,
            message: "Nice job! Keep going!"
        });

        if (this.state.score === 27) {
            this.setState({
                message: "I don't have any more characters! You win!"
            })
            this.gameReset();
        }
    }

    handleClick = (name) => {
        console.log(name)
        const findCharacter = this.state.unchosenChar.find(
            item => item.name === name
        );

        if (findCharacter === undefined) {

            this.setState({
                shuffledArray: [],
                message: <Modal
                    gameReset={this.gameReset} />
            });

        } else {

            const newCharacter = this.state.unchosenChar.filter(
                item => item.name !== name
            );

            this.setState({
                unchosenChar: newCharacter
            })

            this.handleIncrement();
            this.shuffle(characters);
        }
    }

    gameReset = () => {
        this.setState({
            topScore: this.state.score > this.state.topScore
                ? this.state.score
                : this.state.topScore,
            score: 0,
            message: "Click a picture to begin!"
        })
        this.shuffle(characters);
    }

    render() {
        return (
            <div>
                <Navbar
                    message={this.state.message}
                    score={this.state.score}
                    topScore={this.state.topScore} />

                <div className="jumbotron">
                    <h1 className="text-center align-middle"> Welcome to <img alt="simpsons logo" id = "banner"src={simpsons} /> Memory Game</h1>
                    <h6 className="text-center">Click on an image to earn points, but don't click on anybody more than once!</h6>
                </div>

                <div id="pictureContainer" className="container shadow-lg">
                    <div className="row h-100 justify-content-center align-items-center">
                        {this.state.shuffledArray.map(char => {
                            return <ImgCard
                                key={char.id}
                                shuffle={this.shuffle}
                                characters={this.characters}
                                message={this.state.message}
                                score={this.state.score}
                                handleClick={this.handleClick}
                                {...char} />
                        })}
                    </div>
                </div>

                <footer className="footer">
                    <div className="bottom">
                        Simpsons Memory Game
                    <img id="logo" name="Built with ReactJS" alt="Built with ReactJS" src={logo} />
                    </div>
                </footer>

            </div>
        );
    };
};
export default App;
