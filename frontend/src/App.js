import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import { Container } from 'react-bootstrap';
import Navbar from './Components/Navbar'
import Home from './Pages/GradeHome';
import About from './Pages/gradeAbout';
import Footer from './Components/footer'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Profile from './Pages/Profile'
//import gradeConvert from './Pages/gradeConvert';
//import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path = '/' exact component = {Home} />
        <Route path = '/about' exact component = {About} />
        <Route path = '/login' exact component = {Login} />
        <Route path = '/register' exact component = {Register} />
        <Route path = '/profile' exact component = {Profile} />
      </Switch>
      <Footer />  
    </Router>
  );
}

export default App;
