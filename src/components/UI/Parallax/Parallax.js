import React, {Component} from "react";
import classes from "./Parallax.css";
import astronaut from "../../../assets/images/parallax/astronaut.png";
import background from "../../../assets/images/parallax/bg.png";
import cloudLeftTop from "../../../assets/images/parallax/cloud_Left_Top.png";
import cloudRightBottom from "../../../assets/images/parallax/Cloud_right_bottom.png";
import moon from "../../../assets/images/parallax/moon.png";
import racket from "../../../assets/images/parallax/racket.png";

class Parallax extends Component {
    state = {
        movement: {
            background: {
                XSpeed: 0,
                YSpeed: -0.05,
                transform: "translate3d(0,0,0)"
            },
            astronaut: {
                XSpeed: 0.3,
                YSpeed: 0.2,
                transform: "translate3d(0,0,0)"
            },
            racket: {
                XSpeed: 0.1,
                YSpeed: -0.2,
                transform: "translate3d(0,0,0)"
            },
            moon: {
                XSpeed: -0.05,
                YSpeed: 0.1,
                transform: "translate3d(0,0,0)"
            }
        }
    };

    componentDidMount() {
        document.addEventListener("mousemove", (e) => {
            let clientX = e.clientX;
            let clientY = e.clientY;

            let elementsMove = {...this.state.movement};
            Object.keys(elementsMove).forEach((key) => {
                let elXC = clientX * elementsMove[key].XSpeed;
                let elYC = clientY * elementsMove[key].YSpeed;
                elementsMove[key].transform = "translate3d(" + elXC +"px," + elYC + "px,0)";
            });

            this.setState({
                movement:elementsMove
            });
        });
    }

    render() {
        return (
            <section className={classes.Parallax}>
                <img style={{transform: this.state.movement.background.transform}} className={classes.mouseMove + " " + classes.bg} src={background} alt={"someImage"}/>
                <img className={classes.mouseMove + " " + classes.cloudLeft} src={cloudLeftTop} alt={"someImage"}/>
                <img className={classes.mouseMove + " " + classes.cloudRight} src={cloudRightBottom} alt={"someImage"}/>
                <img style={{transform: this.state.movement.moon.transform}} className={classes.mouseMove + " " + classes.moon}
                     src={moon} alt={"someImage"}/>
                <img style={{transform: this.state.movement.astronaut.transform}}
                     className={classes.mouseMove + " " + classes.astronaut} src={astronaut} alt={"someImage"}/>
                <img style={{transform: this.state.movement.racket.transform}}
                     className={classes.mouseMove + " " + classes.racket} src={racket} alt={"someImage"}/>
            </section>
        );
    }
}

export default Parallax;