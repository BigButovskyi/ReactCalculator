import React, {Component} from "react";
import classes from "./MathControls.css";
import MathButton from "./MathButton/MathButton";

class MathControls extends Component {


    render() {
        const controls = this.props.mathOperations.map((el,i) => {
            let mathbuttons = el.map((mathElement, mathElIndex) => {
                let btnFunction = (mathElement.name === "=")? this.props.submitAnswer:this.props.handleClick;
                return (<MathButton handleClick={btnFunction} key={mathElement.name + mathElIndex} symbol={mathElement.name} type={mathElement.type}/>);
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