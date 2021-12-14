import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import { Container } from 'react-bootstrap';
//import NavbarApp from './Components/NavbarApp'
import Home from './Pages/gradeHome';
import About from './Pages/gradeAbout';
import Convert from './Pages/gradeConvert'
import Footer from './Components/footer'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Profile from './Pages/Profile'
//import gradeConvert from './Pages/gradeConvert';
//import './App.css';

function App() {
  return (
    <Router>
      {/* <NavbarApp /> */}
      <Switch>
        <Route path = '/' exact component = {Home} />
        <Route path = '/about' exact component = {About} />
        <Route path = '/login' exact component = {Login} />
        <Route path = '/register' exact component = {Register} />
        <Route path = '/profile' exact component = {Profile} />
        <Route path = '/convert' exact compontent = {Convert} />
      </Switch>
      <Footer />  
    </Router>
  );
}

export default App;
