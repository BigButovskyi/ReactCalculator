import React, {Component} from 'react';
import classes from './App.css';
import CalculatorContainer from "./containers/CalculatorContainer/CalculatorContainer";

class App extends Component{
  render() {
    return (
        <div className={classes.App}>
            <CalculatorContainer/>
        </div>
    );
  }
}

export default App;
