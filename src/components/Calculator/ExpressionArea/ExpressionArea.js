import React, {Component} from "react";
import classes from "./ExpressionArea.css";

class ExpressionArea extends Component{
    render() {
        let expression = this.props.expression.join("");
        return (
            <textarea maxLength="3" className={classes.Area} value={expression} readOnly/>
        );
    }
}

export default ExpressionArea;

