import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/Header/Header';

import HomeScreen from './components/HomeScreen/HomeScreen';
import TournamentsScreen from './components/TournamentsScreen/TournamentsScreen';
import MatchesScreen from './components/MatchesScreen/MatchesScreen';
import MatchScreen from './components/MatchScreen/MatchScreen';

class App extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <React.Fragment>
            <Header />
            <Switch>
              <Route exact path="/" component={HomeScreen} />
              <Route exact path="/game/:gameId" component={TournamentsScreen} />
              <Route exact path="/tournament/:tournamentId" component={MatchesScreen} />
              <Route exact path="/match/:matchId" component={MatchScreen} />
            </Switch>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
