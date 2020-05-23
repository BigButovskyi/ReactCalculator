import React from "react";
import classes from "./LoadingScreen.css";

const loadingscreen = (props) => {
    if (props.show) {
        return (
            <div className={classes.LoadingScreen}>

            </div>
        );
    } else {
        return null;
    }
};

export default loadingscreen;