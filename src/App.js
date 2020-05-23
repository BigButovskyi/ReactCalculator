import React, {Component} from 'react';
import classes from './App.css';
import CalculatorContainer from "./containers/CalculatorContainer/CalculatorContainer";
import {load} from "dotenv";

class App extends Component {

    componentDidMount() {
        window.addEventListener("load",function () {
            let loadingScreen = document.getElementById("loading_screen");
            loadingScreen.style.animation = "screen_hide 1s";
            setTimeout(function () {
                loadingScreen.style.display = "none";
            },1000);
        });
    }

    componentWillUnmount() {
        window.removeEventListener("load",function () {
            let loadingScreen = document.getElementById("loading_screen");
            loadingScreen.style.display = "none";
        });
    }

    render() {
        return (
            <div className={classes.App}>
                <CalculatorContainer/>
            </div>
        );
    }
}

export default App;
