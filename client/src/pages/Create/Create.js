import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Footer from "../../components/Footer";

class Create extends Component {
  state = {
    games: [],
    sport: "",
    location: "",
    numPlayers: "",
    description: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.sport && this.state.location) {
      API.saveGame({
        sport: this.state.sport,
        location: this.state.location,
        numPlayers: this.state.numPlayers,
        description: this.state.description
      })
        .then(res => this.loadGames())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Create A PickUp Game Here!</h1>
              <h3>Fill out the form below to get started</h3>
            </Jumbotron>
            <form>
              <Input
                value={this.state.sport}
                onChange={this.handleInputChange}
                name="sport"
                placeholder="Sport (required)"
              />
              <Input
                value={this.state.location}
                onChange={this.handleInputChange}
                name="location"
                placeholder="Location (required)"
              />
              <Input
                value={this.state.numPlayers}
                onChange={this.handleInputChange}
                name="numPlayers"
                placeholder="# of Players (required)"
              />
              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Description (Optional)"
              />
              <FormBtn
                disabled={!(this.state.location && this.state.sport)}
                onClick={this.handleFormSubmit}
              >
                Create Game
              </FormBtn>
            </form>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Create;