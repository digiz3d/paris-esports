import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/Header/Header';

import HomeScreen from './screens/HomeScreen';
import TournamentsScreen from './screens/TournamentsScreen';
import MatchesScreen from './screens/MatchesScreen';
import MatchScreen from './screens/MatchScreen';

class App extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <React.Fragment>
            <Header />
            <Switch>
              <Route exact path="/" component={HomeScreen} />
              <Route exact path="/tournaments" component={TournamentsScreen} />
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
