/* Multiview Review
Good job on this assignment. While you've made use of routes, you haven't actually used any nested routes to have one component being displayed constantly.
In future assignments using react-router, try using nested routes to have one parent component, and other components being shown within it.
*/
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