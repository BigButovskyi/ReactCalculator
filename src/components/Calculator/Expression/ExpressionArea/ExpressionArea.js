import React, {Component} from "react";
import classes from "./ExpressionArea.css";

class ExpressionArea extends Component{
    render() {
        return (
            <textarea rows="2" className={classes.Area}>

            </textarea>
        );
    }
}

export default ExpressionArea;

