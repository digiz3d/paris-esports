import React from 'react';
import { connect } from 'react-redux';
import { fetchGamesIfNeeded } from '../../actions/games';
import { withRouter } from 'react-router-dom';
import './GameItem.css';

class GameItem extends React.Component {
    componentDidMount() {
        this.props.fetchGamesIfNeeded();
    }

    render() {
        return (
            <div
                className="GameItem"
                onClick={() => this.props.history.push('/game/' + this.props.game.id)}
                style={{ backgroundImage: 'url("' + this.props.game.coverImageUrl + '")' }}
            >
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GameItem));