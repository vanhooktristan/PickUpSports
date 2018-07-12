import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Footer from "../../components/Footer";
import API from "../../utils/API";

class Detail extends Component {
  state = {
    game: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  componentDidMount() {
    API.getGame(this.props.match.params.id)
      .then(res => this.setState({ game: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                PickUp Details
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>{this.state.game.sport}</h1>
              <p>Number of Players: {this.state.game.numPlayers}</p>
              <h3>Description</h3>
              <p>
                {this.state.game.description}
              </p>
              <h3>Location</h3>
              <p>
                {this.state.game.location}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/games">← Back to Games</Link>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Detail;
