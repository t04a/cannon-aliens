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
        }, 10);
        return () => clearInterval(intervalId); //This is important
    }, [canvasMousePosition])

    function trackMouse(event) {
        updateCanvasMousePosition(getCanvasPosition(event));
    }

    return (
        <Canvas
            angle={props.angle}
            gameState={props.gameState}
            startGame={props.startGame}
            trackMouse={event => (trackMouse(event))}
        />
    )
}

App.propTypes = {
    angle: PropTypes.number.isRequired,
    gameState: PropTypes.shape({
        started: PropTypes.bool.isRequired,
        kills: PropTypes.number.isRequired,
        lives: PropTypes.number.isRequired,
        flyingObjects: PropTypes.arrayOf(PropTypes.shape({
            position: PropTypes.shape({
                x: PropTypes.number.isRequired,
                y: PropTypes.number.isRequired
            }).isRequired,
            id: PropTypes.number.isRequired,
        })).isRequired,
    }).isRequired,
    moveObjects: PropTypes.func.isRequired,
    startGame: PropTypes.func.isRequired,
};

export default App;
