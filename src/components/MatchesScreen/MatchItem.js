import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchMatchesIfNeeded } from '../../actions/matches';
import './MatchItem.css';

class MatchItem extends React.Component {
    componentDidMount() {
        this.props.fetchMatchesIfNeeded();
    }

    render() {
        if (!this.props.match) return "...";

        return (
            <div
                className="MatchItem"
                onClick={() => this.props.history.push('/match/' + this.props.match.id)}
            >
                {this.props.match.team1} versus {this.props.match.team2}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    match: state.entities.matches.items[ownProps.matchId]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchMatchesIfNeeded: () => dispatch(fetchMatchesIfNeeded())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MatchItem));