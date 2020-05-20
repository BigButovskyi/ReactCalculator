import React, {Component} from "react";
import classes from "./CalculatorContainer.css";
import Calculator from "../../components/Calculator/Calculator";
import Modal from "../../components/UI/Modal/Modal";

class CalculatorContainer extends Component {
    state = {
        error: "",
        showErrorMessage: false
    };

    showErrorMessage = (errorMessage) => {
        this.setState({
            error: errorMessage,
            showErrorMessage: true
        });
    };

    closeErrorMessageHandler = () => {
        this.setState({
            error: "",
            showErrorMessage: false
        });
    };

    render() {
        return (
            <div className={classes.CalculatorContainer}>
                <Modal error={this.state.error} closeHandler={this.closeErrorMessageHandler} show={this.state.showErrorMessage}/>
                <header>
                    <span>Welcome!</span>
                </header>
                <main>
                    <Calculator showError={(msg) => this.showErrorMessage(msg)}/>
                </main>
            </div>
        );
    }
}

export default CalculatorContainer;