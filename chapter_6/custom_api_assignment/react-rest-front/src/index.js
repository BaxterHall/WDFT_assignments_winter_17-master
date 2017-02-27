import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Link } from 'react-router';
import Home from './Home';
import About from './About'
import './App.css';
import App from './App';


ReactDOM.render(<Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
</Router>, document.getElementById('root'));