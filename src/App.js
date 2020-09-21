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
import SreemongolSchedule from './Components/SreemongolSchedule/SreemongolSchedule';
import SundorbonSchedule from './Components/SundorbonSchedule/SundorbonSchedule';
import Header from './Components/Header/Header';

function App() {
  return (
    <div >
      <Router>
        <Header/>
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
          <Route path="/sreemongolschedule">
                <SreemongolSchedule/>
          </Route>
          <Route psth="/sundorbonschedule">
            <SundorbonSchedule/>
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
