import React, {Component} from "react";
import classes from "./CalculatorContainer.css";
import Calculator from "../../components/Calculator/Calculator";

class CalculatorContainer extends Component {
    render() {
        return (
            <div className={classes.CalculatorContainer}>
                <header>
                    <span>Welcome!</span>
                </header>
                <main>
                    <Calculator/>
                </main>
            </div>
        );
    }
}

export default CalculatorContainer;