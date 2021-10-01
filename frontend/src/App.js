import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import { Container } from 'react-bootstrap';
import Navbar from './Components/Navbar'
import Home from './Pages/gradeHome';
import About from './Pages/gradeAbout';
import Footer from './Components/footer'
//import gradeConvert from './Pages/gradeConvert';
//import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path = '/' exact component = {Home} />
        <Route path = '/about' exact component = {About} />
      </Switch>
      <Footer />  
    </Router>
  );
}

export default App;
