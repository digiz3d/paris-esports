import api from './api';

export const REQUEST_MATCHES = 'REQUEST_MATCHES';
function requestMatches() {
    return {
        type: REQUEST_MATCHES
    };
}

export const RECEIVE_MATCHES = 'RECEIVE_MATCHES';
function receiveMatches(data) {
    return {
        type: RECEIVE_MATCHES,
        items: data
    };
}

export const INVALIDATE_MATCHES = 'INVALIDATE_MATCHES';
function invalidateMatches() {
    return {
        type: INVALIDATE_MATCHES
    }
}

function fetchMatches() {
    return dispatch => {
        dispatch(requestMatches());
        api.getMatches().then((data) => dispatch(receiveMatches(data)));
    };
}

function shouldFetchMatches(state) {
    if (state.entities.matches.isFetching) {
        return false;
    }
    else {
        return state.entities.matches.didInvalidate;
    }
}

export function fetchMatchesIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchMatches(getState())) {
            return dispatch(fetchMatches());
        }
        else {
            return Promise.resolve();
        }
    }
}