import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import { Col, Row, Container } from "../../components/Grid";

class Home extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>PickUp Sports</strong>
              </h1>
              <h2 className="text-center">
                Join in on the fun and PickUp a new hobbie!!
              </h2>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            <Card title="About">
              <p className="text-center">Have you ever wanted to play a sport for fun without paying rediculous team fees? Not to mention finding enough people to form a team. This app is your solution!! Here you can create PickUp games and have others join you that have similar interests in the sport you are playing. No sign-up fees, no field rental, no worries! Here on PickUp we are all about the community coming together in an active and cost effective way. With this app you have the ability to try out new sports with people who are just wanting to have fun or get better without breaking the bank. </p>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="How to get started">
              <p className="text-center">The best way to start a new pickUp game is to find a place to play. This all depends on what sport is being played, however most sports can be played in an open field. By clicking the Create button at the top, you are allowed to create your own PickUp game! Fill out the form by entering the desired sport, location, time and how many people are playing. By doing so other users can see PickUp games you create. This allows you to fill in the neccessary players you need for the sport being played.</p>
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Home;