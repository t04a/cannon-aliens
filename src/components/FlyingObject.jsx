import FlyingObjectBase from "./FlyingObjectBase";
import FlyingObjectTop from "./FlyingObjectTop";
import PropTypes from "prop-types";

const FlyingObject = props => (
    <g>
        <FlyingObjectBase position={props.position} />
        <FlyingObjectTop position={props.position} />
    </g>
);

FlyingObject.propTypes = {
    position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
    }).isRequired,
};

export default FlyingObject;