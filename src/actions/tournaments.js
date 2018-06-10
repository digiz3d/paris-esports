import api from './api';

export const REQUEST_TOURNAMENTS = 'REQUEST_TOURNAMENTS';
function requestTournaments() {
    return {
        type: REQUEST_TOURNAMENTS
    };
}

export const RECEIVE_TOURNAMENTS = 'RECEIVE_TOURNAMENTS';
function receiveTournaments(data) {
    return {
        type: RECEIVE_TOURNAMENTS,
        items: data
    };
}

export const INVALIDATE_TOURNAMENTS = 'INVALIDATE_TOURNAMENTS';
function invalidateTournaments() {
    return {
        type: INVALIDATE_TOURNAMENTS
    }
}

function fetchTournaments() {
    return dispatch => {
        dispatch(requestTournaments());
        api.getTournaments().then((data) => dispatch(receiveTournaments(data)));
    };
}

function shouldFetchTournaments(state) {
    if (state.entities.tournaments.isFetching) {
        return false;
    }
    else {
        return state.entities.tournaments.didInvalidate;
    }
}

export function fetchTournamentsIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchTournaments(getState())) {
            return dispatch(fetchTournaments());
        }
        else {
            return Promise.resolve();
        }
    }
}