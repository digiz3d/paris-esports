import { combineReducers } from 'redux';
import { RECEIVE_GAMES, INVALIDATE_GAMES, REQUEST_GAMES } from '../actions/games';
import { RECEIVE_TOURNAMENTS, INVALIDATE_TOURNAMENTS, REQUEST_TOURNAMENTS } from '../actions/tournaments';
import { RECEIVE_MATCHES, INVALIDATE_MATCHES, REQUEST_MATCHES } from '../actions/matches';

function games(state = { isFetching: false, didInvalidate: true, items: {} }, action) {
    switch (action.type) {
        case INVALIDATE_GAMES:
            return Object.assign({}, state, { didInvalidate: true });

        case REQUEST_GAMES:
            return Object.assign({}, state, { isFetching: true, didInvalidate: false });

        case RECEIVE_GAMES:
            return Object.assign({}, state, { isFetching: false, didInvalidate: false, items: action.items });

        default:
            return state;
    }
}

function tournaments(state = { isFetching: false, didInvalidate: true, items: {} }, action) {
    switch (action.type) {
        case INVALIDATE_TOURNAMENTS:
            return Object.assign({}, state, { didInvalidate: true });

        case REQUEST_TOURNAMENTS:
            return Object.assign({}, state, { isFetching: true, didInvalidate: false });

        case RECEIVE_TOURNAMENTS:
            return Object.assign({}, state, { isFetching: false, didInvalidate: false, items: action.items });

        default:
            return state;
    }
}

function matches(state = { isFetching: false, didInvalidate: true, items: {} }, action) {
    switch (action.type) {
        case INVALIDATE_MATCHES:
            return Object.assign({}, state, { didInvalidate: true });

        case REQUEST_MATCHES:
            return Object.assign({}, state, { isFetching: true, didInvalidate: false });

        case RECEIVE_MATCHES:
            return Object.assign({}, state, { isFetching: false, didInvalidate: false, items: action.items });

        default:
            return state;
    }
}


export default combineReducers({
    games,
    tournaments,
    matches
});