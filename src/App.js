import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <div className='container'>
      <HashRouter>
        <Navigation />
        <Route path='/' exact={true} component={Home} />
        <Route path='/about' component={About} />
      </HashRouter>
    </div>);
}

export default App