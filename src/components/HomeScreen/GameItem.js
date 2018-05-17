import React from 'react';
import { connect } from 'react-redux';
import { fetchGamesIfNeeded } from '../../actions/games';
import './GameItem.css';

class GamesList extends React.Component {
    componentDidMount() {
        this.props.fetchGamesIfNeeded();
    }

    render() {
        if (!this.props.game) return "Loading";

        return (
            <div className="GameItem">
                {this.props.game.name}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    game: state.entities.games.items[ownProps.gameId]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchGamesIfNeeded: () => dispatch(fetchGamesIfNeeded())
});

export default connect(mapStateToProps, mapDispatchToProps)(GamesList);