import Sky from "./Sky";
import Ground from "./Ground";
import CannonPipe from "./CannonPipe";
import CannonBase from "./CannonBase";
import PropTypes from "prop-types";
import CannonBall from "./CannonBall";
import CurrentScore from "./CurrentScore";
import FlyingObject from "./FlyingObject";
import Heart from "./Heart";
import StartGame from "./StartGame";
import Title from "./Title";
import {gameHeight} from "../utils/constants";

function Canvas(props) {
    const viewBox = [window.innerWidth / -2, 100 - gameHeight, window.innerWidth, gameHeight];
    return (
        <svg
            id="aliens-go-home-canvas"
            preserveAspectRatio="xMaxYMax none"
            onMouseMove={props.trackMouse}
            viewBox={viewBox}
        >
            <defs>
                <filter id="shadow">
                    <feDropShadow dx="1" dy="1" stdDeviation="2"/>
                </filter>
            </defs>
            <Sky/>
            <Ground/>
            <CannonPipe rotation={props.angle}/>
            <CannonBase/>
            <CurrentScore score={15}/>

            { ! props.gameState.started &&
            <g>
                <StartGame onClick={() => props.startGame()} />
                <Title />
            </g>
            }

            { props.gameState.started &&
            <g>
                <FlyingObject position={{x: -150, y: -300}}/>
                <FlyingObject position={{x: 150, y: -300}}/>
            </g>
            }
        </svg>
    );
}

Canvas.propTypes = {
    angle: PropTypes.number.isRequired,
    gameState: PropTypes.shape({
        started: PropTypes.bool.isRequired,
        kills: PropTypes.number.isRequired,
        lives: PropTypes.number.isRequired,
    }).isRequired,
    trackMouse: PropTypes.func.isRequired,
    startGame: PropTypes.func.isRequired,
};

export default Canvas;