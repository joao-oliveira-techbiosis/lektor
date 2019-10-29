import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Page from './components/page/page';
import Library from './components/library/library';
import Navbar from './components/navbar/navbar';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/" component={Library} />
        <Route path="/library" component={Library} />
        <Route path="/page" component={Page} />
      </Router>
    </div>
  );
}

export default App;
