import React, { Component } from 'react';
import { Jumbotron, Container, ListGroup, ListGroupItem, Alert, Button } from 'reactstrap';
// var Link = require('react-router-dom').Link;
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className='container'>
        <h2 className="display-3">CFM Hackathon</h2>
        <Jumbotron fluid>
          <Container fluid>
            <h2 className="display-3">Important Info</h2>
            <p>Kickoff Date: 5:30pm Nov. 16</p>
            <p>Submission deadline: 10am on Nov. 19</p>
            <p>Theme: Portfolio Analysis</p>
            <p>In this hackathon, we will develop a frontend application using ReactJS. A stock json file will be provided. The file consists of the one year TSX60 stocks data. Based on the data, pick 5 stocks to build a equally-weighted portfolio. The team with the highest portfolio return in a week wins.</p>
            <Alert color="info">
              Reminder: Start looking for your group (team of 4). Don't forget to bring your own laptop and charger
            </Alert>
          </Container>
        </Jumbotron>
        <Jumbotron fluid>
          <Container fluid>
            <h2 className="display-3">Rules</h2>
            <ListGroup>
              <ListGroupItem>Each student will clone the starter repository and create a new team branch from the repository</ListGroupItem>
              <ListGroupItem>To submit your code, you need to push your latest code to the team branch before the deadline</ListGroupItem>
              <ListGroupItem>If you commit new changes after the deadline, you will be disqualified from the awards</ListGroupItem>
              <ListGroupItem>DO NOT modify the data files or anything outside of your team folder!</ListGroupItem>
              <ListGroupItem>Make sure all numbers are calculated from the data file. Do not hardcode numbers! We will catch you!</ListGroupItem>
              <ListGroupItem>Project should at least include information regarding stock analysis, portfolio return, each group member's profile, and graphs/charts about the portfolio</ListGroupItem>
            </ListGroup>
          </Container>
        </Jumbotron>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Kickoff</h1>
            <p className="lead">Date: 5:30pm Nov. 16</p>
            <p>Place: DC3336</p>
            <p>Food: Pizza will be provided</p>
          </Container>
        </Jumbotron>
        <Jumbotron fluid>
          <Container fluid>
            <h2 className="display-3">Awards</h2>
            <p>Categories: Best Coding Style, Best Web Design, Best Portfolio Return</p>
            <p>Judges: CFM mentors and staffs</p>
          </Container>
        </Jumbotron>
        <Jumbotron fluid>
          <Container fluid>
            <h2 className="display-3">Resource</h2>
            <p>Tutorials: Git, ReactJS</p>
            <Link to="/example"><Button color="secondary">Learn More</Button></Link>
          </Container>
        </Jumbotron>
      </div>
    )
  }
}
export default Home;