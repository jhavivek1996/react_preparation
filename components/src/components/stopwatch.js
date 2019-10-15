import React from 'react';
//import className from './style.scss';



class Stopwatch extends React.Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 10);
  };

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };
  resetTimer = () => {
    this.setState({
      timerStart: 0,
      timerTime: 0
    });
  };
    render() {
      const { timerTime } = this.state;
let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
      return (<div className="container-fluid jumbotron-fluid">
        <div className="Stopwatch-display">
        {hours} : {minutes} : {seconds} : {centiseconds}
      </div>
      {this.state.timerOn === false && this.state.timerTime === 0 && (
        <button onClick={this.startTimer} className="btn btn-success">Start</button> 
      )}
      {this.state.timerOn === true && (
        <button onClick={this.stopTimer} className="btn btn-warning">Stop</button>
      )}
      {this.state.timerOn === false && this.state.timerTime > 0 && (
        <button onClick={this.startTimer} className="btn btn-info">Resume &nbsp;</button>
      )}
      {this.state.timerOn === false && this.state.timerTime > 0 && (
        <button onClick={this.resetTimer} className="btn btn-danger">Reset</button>
      )}
      </div>);
    }
  }
  export default Stopwatch;