import React, {Component} from "react";
import Aox from "../../../hoc/Aox/Aox";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.css";

class Modal extends Component{

    render() {
        return (
            <Aox>
                <Backdrop closeHandler={this.props.closeHandler} show={this.props.show}/>
                <div
                    style={{
                            transform: (this.props.show)? "translateY(0)":"translateY(-100vh)"
                        }}
                    className={classes.Modal}>
                    <h2>Error</h2>
                    <h3>{this.props.error}</h3>
                </div>
            </Aox>
        );
    }
}

export default Modal;