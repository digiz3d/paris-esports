import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchTournamentsIfNeeded } from '../../actions/tournaments';
import TournamentItem from './TournamentItem';
import './TournamentsList.css';

class TournamentsList extends React.Component {
    componentDidMount() {
        this.props.fetchTournamentsIfNeeded();
    }

    render() {
        if (!this.props.tournaments) return "null";

        return (
            <div className="TournamentsList">
                {
                    Object.values(this.props.tournaments)
                        .filter(tournament => tournament.gameId === this.props.match.params.gameId)
                        .map(tournament => {
                            return <TournamentItem key={tournament.id} tournamentId={tournament.id} />;
                        })
                }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    tournaments: state.entities.tournaments.items
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchTournamentsIfNeeded: () => dispatch(fetchTournamentsIfNeeded())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TournamentsList));