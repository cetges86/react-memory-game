import React from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';


class ModalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <Container>
        <Button className= "animated wobble" color="danger" onClick={this.toggle}>Oh No! Click Here!</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Game Over! D'oh! </ModalHeader>
          <ModalBody>
            You guessed the same character twice! Oh No!
          </ModalBody>
          <ModalFooter>
            <Button color="info" onClick={this.props.gameReset}>Reset</Button>{' '}
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default ModalPage;