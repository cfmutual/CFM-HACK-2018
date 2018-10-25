import React, { Component } from 'react';
// import Players from '../Data/players';
import PlayerStats from '../Data/playerStats';
import Teams from '../Data/teams';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Jumbotron } from 'reactstrap';

var options = {
  chart: {
    type: 'scatter',
    zoomType: 'xy'
  },
  title: {
    text: 'NBA Player\'s Score Breakdown'
  },
  xAxis: {
    title: {
        enabled: true,
        text: 'Average Minutes Played'
    },
    startOnTick: true,
    endOnTick: true,
    showLastLabel: true
  },
  yAxis: {
      title: {
          text: 'Average Points'
      }
  },
  legend: {
    layout: 'vertical',
    align: 'left',
    verticalAlign: 'top',
    x: 100,
    y: 70,
    floating: true,
    backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
    borderWidth: 1
},
plotOptions: {
    scatter: {
        marker: {
            radius: 5,
            states: {
                hover: {
                    enabled: true,
                    lineColor: 'rgb(100,100,100)'
                }
            }
        },
        states: {
            hover: {
                marker: {
                    enabled: false
                }
            }
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.name} scores {point.y} points in {point.x} minutes'
        }
    }
  },
}

class Example extends Component {
  convertPlayerStatJSON () {
    var headers = PlayerStats.headers;
    var statsArr = PlayerStats.rowSet;
    var statsJSONArr = [];
    statsArr.forEach(
      (entry) => {
        var obj = {};
        headers.forEach((header, index) =>{
          obj[header] = entry[index];
        })
        statsJSONArr.push(obj);
      }
    )
    return statsJSONArr;
  }

  generateSeries (statsJSONArr) {
    var series = [{
      name: 'NBA players',
      data: statsJSONArr.map(player => {
        return {
          x: player.MIN,
          y: player.PTS,
          name: player.PLAYER_NAME
        }
      })
    }]

    return series;
  }
  render() {
    var statsJSONArr = this.convertPlayerStatJSON();
    var series = this.generateSeries(statsJSONArr);
    options['series'] = series;
    return (
      <div className='container'>
        <Jumbotron fluid>
          <div className='container'>
            <h2>Example: NBA</h2>
            {/* <p>{Players.length}</p> */}
            {Teams.length}
            <HighchartsReact
              highcharts={Highcharts}
              options={options}
            />
          </div>
        </Jumbotron>
      </div>
    )
  }
}
export default Example;