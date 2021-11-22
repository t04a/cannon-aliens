import Canvas from "./components/Canvas";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {getCanvasPosition} from "./utils/formulas";

function App(props) {
    const [canvasMousePosition, updateCanvasMousePosition] = useState();

    useEffect(() => {
        window.onresize = () => {
            const cnv = document.getElementById('aliens-go-home-canvas');
            cnv.style.width = `${window.innerWidth}px`;
            cnv.style.height = `${window.innerHeight}px`;
        };
        window.onresize();
    })

    useEffect(() => {
        const intervalId = setInterval(() => {
            props.moveObjects(canvasMousePosition);
        }, 1);
        return () => clearInterval(intervalId); //This is important
    }, [canvasMousePosition])

    function trackMouse(event) {
        updateCanvasMousePosition(getCanvasPosition(event));
    }

    return (
        <Canvas
            angle={props.angle}
            trackMouse={event => (trackMouse(event))}
        />
    )
}

App.propTypes = {
    angle: PropTypes.number.isRequired,
    moveObjects: PropTypes.func.isRequired,
};

export default App;
