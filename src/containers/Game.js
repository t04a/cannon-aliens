import React from 'react';
import {connect} from "react-redux";
import App from "../App";
import {moveObjects} from "../actions";

function mapStateToProps(state) {
    return {
        angle: state.angle
    }
}

const mapDispatchToProps = dispatch => ({
    moveObjects: (mousePosition) => {
        dispatch(moveObjects(mousePosition));
    },
});

const Game = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);

export default Game;