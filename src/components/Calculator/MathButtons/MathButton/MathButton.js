import React, {Component} from "react";
import classes from "./MathButton.css";

class MathButton extends Component{
    render() {
        let btnClass = classes[this.props.type];
        return (
            <div className={classes.MathButton + " " + btnClass}>
                <label>{this.props.symbol}</label>
            </div>
        );
    }
}

export default MathButton;