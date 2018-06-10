import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchTournamentsIfNeeded } from '../../actions/tournaments';
import './TournamentItem.css';

class TournamentItem extends React.Component {
    componentDidMount() {
        this.props.fetchTournamentsIfNeeded();
    }

    render() {
        if (!this.props.tournament) return "null";

        return (
            <div
                className="TournamentItem"
                onClick={() => this.props.history.push('/tournament/' + this.props.tournament.id)}
            >{this.props.tournament.name}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    tournament: state.entities.tournaments.items[ownProps.tournamentId]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchTournamentsIfNeeded: () => dispatch(fetchTournamentsIfNeeded())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TournamentItem));