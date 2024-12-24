import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header';
import Section from './section';
import Contact from './contact';
import Footer from './footer';
import Creer from './creer';
import reportWebVitals from './reportWebVitals'; 
import { Component } from 'react';
class Acceuil extends Component {
  render() {
    return (
      <div>
        <Header />
        <Section />
        <Contact />
        <Footer />
      </div>
    );
  }
}
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/index' element={<Acceuil />} />
        <Route exact path='/creer' element={<Creer/>} />
        <Route exact path="/" element={<Acceuil/>} />
      </Routes>
    </Router>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
reportWebVitals();

