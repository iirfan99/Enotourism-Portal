import React, { useState } from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'; 
import {Login} from "./components/Login"
import {RegisterWineTester} from "./components/RegisterWineTester"
import { Wineries } from './components/Wineries';
import { Locations } from './components/Locations';
import { AboutUs } from './components/AboutUs';
import { LoginWineTester } from './components/LoginWineTester';
import { LoginWineryOwner } from './components/LoginWineryOwner';
import { RegisterWineryOwner } from './components/RegisterWineryOwner';
import { RegisterWineryTourGuide } from './components/RegisterWineryTourGuide';
import { LoginWineryTourGuide } from './components/LoginWineryTourGuide';
import { SpainDomaine } from './components/SpainDomaine';


function App() {
const [currentForm, setCurrentForm] = useState('login');
const toggleForm = (formName) => {
  setCurrentForm(formName);
}



  return (
    <>
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/sign-up' exact component={Login}/>
        <Route path='/Wineries' exact component={Wineries}/>
        <Route path='/Locations' exact component={Locations}/>
        <Route path='/AboutUs' exact component={AboutUs}/>
        <Route path='/RegisterWineTester' exact component={RegisterWineTester}/>
        <Route path='/RegisterWineryOwner' exact component={RegisterWineryOwner}/>
        <Route path='/LoginWineTester' exact component={LoginWineTester}/>
        <Route path='/LoginWineryOwner' exact component={LoginWineryOwner}/>
        <Route path='/RegisterWineryTourGuide' exact component={RegisterWineryTourGuide}/>
        <Route path='/LoginWineryTourGuide' exact component={LoginWineryTourGuide}/>
        <Route path='/Wineries/SpainDomaine' exact component={SpainDomaine} />
    <div>
      {
      currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <RegisterWineTester onFormSwitch={toggleForm} />
      }
    </div>
      </Switch >
    </Router>
      
    </>
  );
}

export default App;
