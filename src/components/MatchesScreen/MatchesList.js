import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchMatchesIfNeeded } from '../../actions/matches';
import MatchItem from './MatchItem';
import './MatchesList.css';

class MatchesList extends React.Component {
    componentDidMount() {
        this.props.fetchMatchesIfNeeded();
    }

    render() {
        if (!this.props.matches) return "...";

        return (
            <div className="MatchesList">
                {
                    Object.values(this.props.matches)
                        .filter(match => match.tournamentId === this.props.match.params.tournamentId)
                        .map(match => {
                            return <MatchItem key={match.id} matchId={match.id} />;
                        })
                }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    matches: state.entities.matches.items
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchMatchesIfNeeded: () => dispatch(fetchMatchesIfNeeded())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MatchesList));