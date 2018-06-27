import React, { Component } from "react";
import Navbar from "./components/Navbar";
import ImgCard from "./components/ImgCard";
import Modal from "./components/Modal";
import characters from "./Images.json";
import logo from "./favicon.ico";
import simpsons from "./simpsons-logo.png";

class App extends Component {

    state = {
        shuffledArray: [],
        score: 0,
        topScore: 0,
        message: "Click a picture to begin!",
        unchosenChar: characters,
        modal: false
    }
    //initially shuffles characters
    componentDidMount() {
        this.shuffle(characters);
    }

    //shuffles ordered characters array into a random array with a length of 12
    shuffle = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        let newArr = arr.slice(15);
        //console.log(newArr)
        this.setState({ shuffledArray: newArr })
    };

    //opens and closes modal
    toggle = () => {
        this.setState({ modal: !this.state.modal });
        this.gameReset();
    };

    //increases your score when you get a character right, and ends the game if there are no more characters
    //Also updates message displayed
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
        };
    };

    //handles click event
    handleClick = (name) => {
        //searches array that initially is identical to character array for name of character
        const findCharacter = this.state.unchosenChar.find(
            item => item.name === name);

        //if character name is not found, then that character has already been clicked
        if (findCharacter === undefined) {
            //launches modal and resets games
            this.setState({
                shuffledArray: [],
                message: "You lose!",
                //triggers modal activation
                modal: !this.state.modal
            });
        } else {
            //if character is found, then remove that character from unchosenChar array
            const newCharacter = this.state.unchosenChar.filter(
                item => item.name !== name
            );
            //resets the unchosen characters to remove the character that was clicked
            this.setState({
                unchosenChar: newCharacter
            })
            //increase score, then reshuffle characters
            this.handleIncrement();
            this.shuffle(characters);
        };
    };
    //resets game to starting position, except the top score
    gameReset = () => {
        //checks if score is larger than the existing top score, then reshuffles and resets
        this.setState({
            topScore: this.state.score > this.state.topScore
                ? this.state.score
                : this.state.topScore,
            score: 0,
            message: "Click a picture to begin!",
            unchosenChar:characters
        })
        this.shuffle(characters);
    }

    render() {
        return (
            <div>
                {/* renders Navbar component for score and message */}
                <Navbar
                    score={this.state.score}
                    topScore={this.state.topScore}>
                    {this.state.message}
                </Navbar>

                <div className="jumbotron">
                    <h1 className="text-center align-middle"> Welcome to <img alt="simpsons logo" id="banner" src={simpsons} /> Memory Game</h1>
                    <h6 className="text-center">Click on an image to earn points, but don't click on anybody more than once!</h6>
                </div>

                <div id="pictureContainer" className="container shadow-lg">
                    <div className="row h-100 justify-content-center align-items-center">
                        {/* runs through characters array and renders an image card for each character, after they've been shuffled */}
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
                {/* renders modal when toggled */}
                <Modal
                    gameReset={this.gameReset}
                    toggle={this.toggle}
                    modal={this.state.modal}
                />

            </div>
        );
    };
};
export default App;
