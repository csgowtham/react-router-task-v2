import React from 'react';
import Home from './Home';
import FullStack from './FullStack';
import AIDatascience from './AIDatascience';
import Automation from './Automation';
import './index.css';
import {Routes,Route, BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">ZenClass</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">All courses </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/fullstack">Full Stack Development</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/aidas">AI & DataScience</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/automation">Automation & Testing</Link>
            </li>
          </ul>
        </div>
      </nav>
      <hr className="my-4" style={{ borderTop: '3px solid purple' }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fullstack" element={<FullStack />} />
        <Route path="/aidas" element={<AIDatascience />} />
        <Route path="/automation" element={<Automation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
