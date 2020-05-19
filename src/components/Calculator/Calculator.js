import React, {Component} from "react";
import classes from "./Calculator.css";
import Expression from "./Expression/Expression";
import MathControls from "./MathButtons/MathControls";

export default class Calculator extends Component {
    render() {
        return (
            <div className={classes.Calculator}>
                <Expression/>
                <MathControls/>
            </div>
        );
    }
}