import Sky from "./Sky";
import Ground from "./Ground";
import CannonPipe from "./CannonPipe";
import CannonBase from "./CannonBase";
import PropTypes from "prop-types";
import CurrentScore from "./CurrentScore";
import FlyingObject from "./FlyingObject";
import StartGame from "./StartGame";
import Title from "./Title";
import {gameHeight} from "../utils/constants";
import Login from "./Login";
import { signIn } from 'auth0-web'

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
                <Login authenticate={signIn} />
            </g>
            }

            { props.gameState.started &&
            <g>
                {props.gameState.flyingObjects.map(flyingObject => (
                    <FlyingObject
                        key={flyingObject.id}
                        position={flyingObject.position}
                    />
                ))}
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
        flyingObjects: PropTypes.arrayOf(PropTypes.shape({
            position: PropTypes.shape({
                x: PropTypes.number.isRequired,
                y: PropTypes.number.isRequired
            }).isRequired,
            id: PropTypes.number.isRequired,
        })).isRequired,
    }).isRequired,
    trackMouse: PropTypes.func.isRequired,
    startGame: PropTypes.func.isRequired,
};

export default Canvas;