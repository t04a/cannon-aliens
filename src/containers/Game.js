import React from 'react';
import {connect} from "react-redux";
import App from "../App";

function mapStateToProps(state) {
    return {
        message: state.message,
    }
}

const Game = connect(mapStateToProps)(App)

export default Game;