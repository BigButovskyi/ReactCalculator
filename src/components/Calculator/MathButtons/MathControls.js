import React, {Component} from "react";
import classes from "./MathControls.css";
import MathButton from "./MathButton/MathButton";

class MathControls extends Component {

    state = {
        mathOperations: [
            [
                {
                    name: "A/C",
                    type: "strict"
                }, {
                    name: "±",
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
            ],[
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
        counter: 0
    };

    render() {
        const controls = this.state.mathOperations.map((el,i) => {
            let mathbuttons = el.map((mathElement, mathElIndex) => {
                return (<MathButton key={mathElement.name + mathElIndex} symbol={mathElement.name} type={mathElement.type}/>);
            });
            return (<section key={"mathsection_" + i} className={classes.MathSection}>{mathbuttons}</section>);
        });
        return (
            <div className={classes.MathButtons}>
                {controls}
            </div>
        );
    }
}

export default MathControls;