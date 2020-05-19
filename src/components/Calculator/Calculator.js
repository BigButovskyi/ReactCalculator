import React, {Component} from "react";
import classes from "./Calculator.css";
import ExpressionArea from "./ExpressionArea/ExpressionArea";
import MathControls from "./MathButtons/MathControls";

export default class Calculator extends Component {
    render() {
        return (
            <div className={classes.Calculator}>
                <section className={classes.Expression}>
                    <ExpressionArea/>
                </section>
                <MathControls/>
            </div>
        );
    }
}