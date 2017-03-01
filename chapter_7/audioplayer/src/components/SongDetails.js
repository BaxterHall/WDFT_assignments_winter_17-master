import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import "../index.css"

class SongDetails extends Component {
    render() {
        // console.log(this.props)
        let songs = this.props.songs
        // console.log(this.props.routeParams.id)
        return (
            <div>
                <div>
                    <nav className="navbar navbar-default navbar-fixed-top">
                        <div className="container1">
                            <ul>
                                <Link className='titles' to="/"> <i className="fa fa-undo fa-2x" aria-hidden="true"></i></Link>
                            </ul>
                        </div>
                    </nav>
                </div>
                <h1 className='songtitle'>{songs[this.props.routeParams.id].title}</h1>
                <p className='description'>{songs[this.props.routeParams.id].description}</p>
                {this.props.playButton}
            </div>
        )
    }
}
export default SongDetails;