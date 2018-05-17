import React from 'react';
import { connect } from 'react-redux';
import { fetchGamesIfNeeded } from '../../actions/games';
import GameItem from './GameItem';

class GamesList extends React.Component {
    componentDidMount() {
        this.props.fetchGamesIfNeeded();
    }

    render() {
        if (!this.props.games) return "null";

        return (
            <div className="GamesList">
                {
                    Object.values(this.props.games).map(game => {
                        return <GameItem key={game.id} gameId={game.id} />;
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    games: state.entities.games.items
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchGamesIfNeeded: () => dispatch(fetchGamesIfNeeded())
});

export default connect(mapStateToProps, mapDispatchToProps)(GamesList);