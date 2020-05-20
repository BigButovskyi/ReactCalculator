import React from "react";
import classes from "./Backdrop.css";

const backdrop = (props) => {
    let style = {
        "display":"block"
    };
    if(!props.show){
        style.display = "none";
    }
    return(
        <div style={style} className={classes.Backdrop} onClick={props.closeHandler}></div>
    );
};

export default backdrop;