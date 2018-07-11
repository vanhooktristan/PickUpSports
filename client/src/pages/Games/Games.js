import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import Footer from "../../components/Footer";

class Games extends Component {
  state = {
    games: [],
    sport: "",
    location: "",
    description: ""
  };

  componentDidMount() {
    this.loadGames();
  }

  loadGames = () => {
    API.getGames()
      .then(res =>
        this.setState({ games: [res.data], sport: "", location: "", description: "" })
      )
      .catch(err => console.log(err));
  };

  deleteGame = id => {
    API.deleteGame(id)
      .then(res => this.loadGames())
      .catch(err => console.log(err));
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
          
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>Current Games</h1>
            </Jumbotron>
            {this.state.games.length ? (
              <List>
                {this.state.games.map((games) => (
                  <ListItem key={games._id} id={games._id}>
                    <Link to={"/games/" + games._id}>
                      <strong>
                        {games.sport}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteGame(games._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Games;
