import React from 'react';
import GamesList from './GamesList';
import '../Screen.css';

class HomeScreen extends React.Component {
    render() {
        return(
            <div className="Screen">
                <GamesList />
            </div>
        );
    }
}

export default HomeScreen;