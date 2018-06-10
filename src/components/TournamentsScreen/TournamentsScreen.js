import React from 'react';

import TournamentsList from './TournamentsList';
import '../Screen.css';

class HomeScreen extends React.Component {
    render() {
        return (
            <div className="Screen">
                <TournamentsList />
            </div>
        );
    }
}

export default HomeScreen;