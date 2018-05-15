import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return(
            <div className="Header">
                <h1>Paris eSports</h1>
                <div><span role="img" aria-label="baguette">🥖</span></div>
            </div>
        );
    }
}

export default Header;