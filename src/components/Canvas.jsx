import Sky from "./Sky";
import Ground from "./Ground";
import CannonPipe from "./CannonPipe";
import CannonBase from "./CannonBase";
import PropTypes from "prop-types";
import CannonBall from "./CannonBall";

function Canvas(props) {
    const viewBox = [
        window.innerWidth / -2,
        100 - window.innerHeight,
        window.innerWidth,
        window.innerHeight];
    return (
        <svg
            id="aliens-go-home-canvas"
            preserveAspectRatio="xMaxYMax none"
            onMouseMove={props.trackMouse}
            viewBox={viewBox}
        >
            <Sky/>
            <Ground/>
            <CannonPipe rotation={props.angle}/>
            <CannonBase/>
            <CannonBall position={{x: 0, y: -100}}/>
        </svg>
    );
}

Canvas.propTypes = {
    angle: PropTypes.number.isRequired,
    trackMouse: PropTypes.func.isRequired,
};

export default Canvas;