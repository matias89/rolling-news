import React from 'react';
import { render } from 'react-dom'; // ReactDOM.render

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// Views
import Home from './views/home/Home';
import Detail from './views/detail/Detail';
import Login from './views/login/Login';
import Articles from './views/articles/Articles';
import Playground from './views/playground/Playground';

// Styles
import './main.css';

const App = () => {
  return (
    <>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/detail/1">Detail</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="/playground">Playground</Link>
          </li>
        </ul>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/articles">
          <Articles />
        </Route>
        <Route path="/playground">
          <Playground />
        </Route>
      </Router>
    </>
  );
};

render(<App />, document.getElementById('app'));