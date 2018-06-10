import React from 'react';

import MatchesList from './MatchesList';
import '../Screen.css';

class MatchesScreen extends React.Component {
    render() {
        return (
            <div className="Screen">
                <MatchesList />
            </div>
        );
    }
}

export default MatchesScreen;