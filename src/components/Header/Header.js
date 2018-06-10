import React from 'react';
import { withRouter } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
    goToHome(e) {
        e.preventDefault();
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="Header" onClick={(e) => this.goToHome(e)}>
                <h1>Paris eSports</h1>
                <div><span role="img" aria-label="baguette">🥖</span></div>
            </div>
        );
    }
}

export default withRouter(Header);