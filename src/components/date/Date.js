import React, {Component} from 'react';

class Clock extends Component {
    
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    //   this.state = {getDay:  ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'] };
    }  

    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date(),
        
      });
      this.setState({
      });
    }

    render() {
      return (
        <div>             
          <h2>Día {this.state.date.getDay()}.</h2>
          <h2>del mes {this.state.date.getMonth()}.</h2>
          <h2>del año {this.state.date.getFullYear()}.</h2>
          <h2>hora {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  


  export default Clock;