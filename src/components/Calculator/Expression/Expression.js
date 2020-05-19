import React, {Component} from "react";
import classes from "./Expression.css";
import ExpressionArea from "./ExpressionArea/ExpressionArea";

export default class Expression extends Component{
    render() {
        return (
            <div className={classes.Expression}>
                <ExpressionArea/>
            </div>
        );
    }
}