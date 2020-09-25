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
import HotelSearch from './Components/HotelSearch/HotelSearch';
import Login from './Components/Login/Login';




function App() {
  
  return (
      
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
          <Route path="/sundorbonschedule">
            <SundorbonSchedule/>
          </Route>
          <Route path="/hotelsearch">
            <HotelSearch/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          
          <Route path="*">
              <NoMatch/>
              
          </Route>
        </Switch>
      </Router>
      
  );
}

export default App;
