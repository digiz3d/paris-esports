import api from './api';

export const REQUEST_GAMES = 'REQUEST_GAMES';
function requestGames() {
    return {
        type: REQUEST_GAMES
    };
}

export const RECEIVE_GAMES = 'RECEIVE_GAMES';
function receiveGames(data) {
    return {
        type: RECEIVE_GAMES,
        items: data
    };
}

export const INVALIDATE_GAMES = 'INVALIDATE_GAMES';
function invalidateGames() {
    return {
        type: INVALIDATE_GAMES
    }
}

function fetchGames() {
    return dispatch => {
        dispatch(requestGames());
        api.getGames().then((data) => dispatch(receiveGames(data)));
    };
}

function shouldFetchGames(state) {
    if (state.entities.games.isFetching) {
        return false;
    }
    else {
        return state.entities.games.didInvalidate;
    }
}

export function fetchGamesIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchGames(getState())) {
            return dispatch(fetchGames());
        }
        else {
            return Promise.resolve();
        }
    }
}