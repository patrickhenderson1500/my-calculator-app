import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent.js';
import KeyPadComponent from './components/KeyPadComponent.js';
import ParticleComponent from './components/ParticleComponent.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: ''
    }
}

onClick = button => {
  if(button === '=') {
    this.calculate()
  }
  else if(button === "C") {
  this.clear()
  }
  else if(button === "CE") {
    this.backspace()
  }
  else {
    this.setState({
      result: this.state.result + button
    })
  }
};

calculate = () => {
  try {
    this.setState({
      //eslint-disable-next-line
      result: (eval(this.state.result) || '' ) + ''
    })
  } catch (e) {
    this.setState({
      result: 'error'
    })
  }
};

clear = () => {
  this.setState({
    result: ''
  })
};

backspace = () => {
  this.setState({
    result: this.state.result.slice(0, -1)
  })
};

  render() {
    return (
      <div>
        <div className='calculator-body'>
          <ResultComponent result={this.state.result}/>
          <KeyPadComponent onClick={this.onClick}/>
          <ParticleComponent/>
          </div>
        </div>

    );
  };
}

export default App;
