import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import SajekSchedule from './Components/SajekSchedule/SajekSchedule';

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route path="/home">
              <Home/>
          </Route>
          <Route exact path="/">
              <Home/>
          </Route>
          <Route path="/sajekschedule">
                <SajekSchedule/>
          </Route>
          <Route path="*">
              <NoMatch/>
              
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
