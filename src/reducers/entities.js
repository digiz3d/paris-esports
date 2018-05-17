import { combineReducers } from 'redux';
import { RECEIVE_GAMES, INVALIDATE_GAMES, REQUEST_GAMES } from '../actions/games';

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


export default combineReducers({
    games
});