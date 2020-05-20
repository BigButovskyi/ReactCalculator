import React, {Component} from "react";
import classes from "./MathButton.css";

class MathButton extends Component{
    render() {
        let btnClass = classes[this.props.type];
        return (
            <div onClick={() => this.props.handleClick(this.props.symbol)} className={classes.MathButton + " " + btnClass}>
               {this.props.symbol}
            </div>
        );
    }
}

export default MathButton;