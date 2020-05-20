import React, {Component} from "react";
import classes from "./Calculator.css";
import ExpressionArea from "./ExpressionArea/ExpressionArea";
import MathControls from "./MathButtons/MathControls";

export default class Calculator extends Component {
    state = {
        mathOperations: [
            [
                {
                    name: "A/C",
                    type: "strict"
                }, {
                name: "⌫",
                type: "operation"
            }, {
                name: "%",
                type: "operation"
            }, {
                name: "÷",
                type: "operation"
            }
            ], [
                {
                    name: "7",
                    type: "number"
                }, {
                    name: "8",
                    type: "number"
                }, {
                    name: "9",
                    type: "number"
                }, {
                    name: "×",
                    type: "operation"
                }
            ], [
                {
                    name: "4",
                    type: "number"
                }, {
                    name: "5",
                    type: "number"
                }, {
                    name: "6",
                    type: "number"
                }, {
                    name: "-",
                    type: "operation"
                }
            ], [
                {
                    name: "1",
                    type: "number"
                }, {
                    name: "2",
                    type: "number"
                }, {
                    name: "3",
                    type: "number"
                }, {
                    name: "+",
                    type: "operation"
                }
            ], [
                {
                    name: "0",
                    type: "number"
                }, {
                    name: ".",
                    type: "number"
                }, {
                    name: "00",
                    type: "number"
                }, {
                    name: "=",
                    type: "strict"
                }
            ]
        ],
        counter: 0,
        expression: []
    };

    handleClick = (symbol) => {
        let temporaryExpression = [...this.state.expression];
        switch (symbol) {
            case "⌫":
                temporaryExpression.pop();
                break;
            case "A/C":
                temporaryExpression = [];
                break;
            default:
                temporaryExpression.push(symbol);
        }

        this.setState({
            expression: temporaryExpression
        });
    };

    submitAnswer = () => {
        if (this.state.expression.length !== 0) {
            let expression = this.state.expression.join("");
            expression = expression.replace("×", "*");
            expression = expression.replace("÷","/");
            try {
                let answer = eval(expression);
                this.setState({
                    expression: [answer]
                });
            }catch (e) {
                alert(e.message);
            }

        }else{
            alert("Please, type expression!");
        }
    };

    render() {
        return (
            <div className={classes.Calculator}>
                <section className={classes.Expression}>
                    <ExpressionArea expression={this.state.expression}/>
                </section>
                <MathControls handleClick={this.handleClick} submitAnswer={this.submitAnswer}
                              mathOperations={this.state.mathOperations}/>
            </div>
        );
    }
}