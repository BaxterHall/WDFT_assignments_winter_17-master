import React, { Component } from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';
import App from './App';

class Home extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container1">
                        <ul>
                            <button type="button" className="btn btn-default navbar-btn"><Link to="/">Home</Link></button>
                            <button type="button" className="btn btn-default navbar-btn"><Link to="/about">About</Link></button>
                        </ul>
                    </div>
                </nav>
                <App />
            </div>
        )
    }
}
export default Home;