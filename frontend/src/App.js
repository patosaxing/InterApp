//import logo from './logo.svg';
import React from 'react';
//import Route from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import gradeConvert from './Pages/gradeConvert';
import './App.css';

function App() {
  return (
    <Router>
      <main className = "py-3">
        <Container>
          <Route path = '/gradeConvert' component = {gradeConvert} />
        </Container>
      </main>
    </Router>
  );
}

export default App;
