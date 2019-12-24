import React from 'react';
import './App.module.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import publications from '../data/publications';
import Reader from '../Reader/Reader';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/reader"
            /* eslint-disable-next-line react/jsx-props-no-spreading */
            render={props => <Reader {...props} items={publications} />}
          />
          <Redirect from="/" to="/reader" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
