import React, { Component } from 'react';
import { Jumbotron, Container, ListGroup, ListGroupItem, Alert, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import GitTutorial from '../Tutorials/git.pdf';
import StockValuation from '../Tutorials/stock-valuation.pdf';
import ReactTutorial from '../Tutorials/react-tutorial.pdf';

class Home extends Component {
  render() {
    return (
      <div className='container'>
        <h2 className="display-4">CFM Hackathon 2018</h2>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Kickoff</h1>
            <p className="lead">Date: 6:00pm November 16, 2018</p>
            <p>Place: DC3336</p>
            <p>Food: Pizza will be provided<i class="em em-pizza"></i></p>
            <p>Tutorials: <a href={StockValuation}>Stock Valuation</a>, <a href={ReactTutorial}>ReactJS</a>, <a href={GitTutorial}>Git</a></p>
          </Container>
        </Jumbotron>
        <Jumbotron fluid>
          <Container fluid>
            <h2 className="display-3">Important Info</h2>
            <p>Submission Deadline: 10:00pm on November 21, 2018 (Open a pull request on Github!)</p>
            <p>Theme: <i class="em em-chart_with_downwards_trend"></i> Portfolio Analytics <i class="em em-chart_with_upwards_trend"></i></p>
            <p>Detail: In this hackathon, each group will develop a frontend application using ReactJS. A <a href="https://raw.githubusercontent.com/uwcfm/CFM-HACK-2018/master/src/Data/stocks.json">stock json file</a> will be provided (already in the repository). The file consists of the one year TSX60 stocks data. Based on the data, pick 5 stocks to build an equally-weighted portfolio.</p>
            <p>Key Assumptions: 3.2% risk free rate, 365 days in a year</p>
            <Alert color="info">
              Reminder: Start looking for your group (team of 4 or less). Don't forget to bring your own laptop and charger.
            </Alert>
          </Container>
        </Jumbotron>
        <Jumbotron fluid>
          <Container fluid>
            <h2 className="display-3">Instructions</h2>
            <ListGroup>
              <ListGroupItem color="info"><i class="em em-baby"></i>&nbsp;&nbsp;Each student will clone the starter <a href="https://github.com/uwcfm/CFM-HACK-2018">repository</a></ListGroupItem>
              <ListGroupItem color="info"><i class="em em-boy"></i>&nbsp;&nbsp;Each group create a new team branch from the repository</ListGroupItem>
              <ListGroupItem color="info"><i class="em em-man"></i>&nbsp;&nbsp;The submission from each group should at least include information regarding each group member's profile, stock analysis, portfolio return, and graphs/charts about the constructed portfolio</ListGroupItem>
              <ListGroupItem color="info"><i class="em em-older_man"></i>&nbsp;&nbsp;Each group would push your latest code to the team branch before the deadline and open a pull request for submission</ListGroupItem>
              <ListGroupItem color="warning"><i class="em em-warning"></i>&nbsp;&nbsp;DO NOT modify the data files or delete code that already exist!</ListGroupItem>
              <ListGroupItem color="warning"><i class="em em-warning"></i>&nbsp;&nbsp;Make sure all numbers are calculated from the data file. Do not hardcode numbers! We will catch you!</ListGroupItem>
              <ListGroupItem color="danger"><i class="em em-exclamation"></i>&nbsp;&nbsp;If a group commits changes after the deadline, such group will be disqualified from the awards</ListGroupItem>
            </ListGroup>
          </Container>
        </Jumbotron>
        <Jumbotron fluid>
          <Container fluid>
            <h2 className="display-3">Environment Setup</h2>
            <p>1. Go to <a href="https://github.com/join?source=header-home">Github</a> and create an account</p>
            <p>2. Give Torry your account name, so we can add you as a collaborator to the repository</p>
            <p>3. Install Git and NodeJS</p>
            <p>4. Clone the repo to local machines</p>
            <p>5. Create a new team branch from master</p>
            <p>6. Boot up the app and you are good to hack!</p>
          </Container>
        </Jumbotron>
        <Jumbotron fluid>
          <Container fluid>
            <h2 className="display-3">Tips</h2>
            <ListGroup>
              <ListGroupItem color="info">Sketch out what you want to build (e.g. look of the page, design, etc.)</ListGroupItem>
              <ListGroupItem color="info">Think of how you want to analyze list of stocks (e.g. look at average daily return of stock, sharpe ratio, x-days moving average, etc.) </ListGroupItem>
              <ListGroupItem color="info">Think of how you want to implement the project (e.g. components design, functions design, styling of project, etc.) </ListGroupItem>
              <ListGroupItem color="info">Split up the work (e.g. one can calculate return of stock, one can do frontend design, etc.)</ListGroupItem>
            </ListGroup>
          </Container>
        </Jumbotron>
        <Jumbotron fluid>
          <Container fluid>
            <h2 className="display-3">Awards</h2>
            <p>Categories: Best Coding Style, Best Web Design, Best Portfolio Return</p>
            <p>Judges: CFM mentors and staffs</p>
            <p>Winners: <i class="em em-trophy"></i> ...TBD</p>
          </Container>
        </Jumbotron>
        <Jumbotron fluid>
          <Container fluid>
            <h2 className="display-3">Resource</h2>
            <p>
              Git:
              <a href="https://git-scm.com/downloads">Git Download</a>,
              <a href="https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup">Git Setup</a>,
              <a href="https://www.atlassian.com/git/tutorials">Git Tutorials from Atlassian</a>,
              <a href="https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases">Git Aliases</a>,
              <a href="https://git-scm.com/book/en/v2/Git-Branching-Rebasing">Git Rebasing</a>
            </p>
            <p>
              React:
              <a href="https://reactstrap.github.io/">React Bootstrap API</a>,
              <a href="https://api.highcharts.com/highcharts/series.scatter">Highcharts API</a>
            </p>
            <p>
              Linux:
              <a href="http://cc.iiti.ac.in/docs/linuxcommands.pdf">Linux Commands</a>
            </p>
            <Link to="/example"><Button color="secondary">Learn More</Button></Link>
          </Container>
        </Jumbotron>
      </div>
    )
  }
}
export default Home;
