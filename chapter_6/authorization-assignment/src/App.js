import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import './App.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: null,
      password: null,
      warning: 'no-warning',
      token: localStorage.authToken
    };
    this.formSubmit = this.formSubmit.bind(this);
    this.txtFieldChange = this.txtFieldChange.bind(this);
  }
  formSubmit(e) {
    let self = this;
    e.preventDefault();
    axios
      .post('http://localhost:3005/login', this.state)
      .then((res) => {
        // console.log(res);
        /*
          TASK 2: If the login request is successful, store the authToken from the server in localStorage
            Once token is stored, redirect user to the private page
            If the login request was unsuccessful, do not redirect user and show a warning message.
        */
        if (res.status === 200) {
          localStorage.authToken = res.data.token;
          location.href = "http://localhost:3000/private";
          // console.log(localStorage.authToken)
        }
      })
      .catch(() => {
        self.setState({
          warning: 'login unsuccessful'
        })
      })
  }
  txtFieldChange(e) {
    if (e.target.name === "username") { this.state.username = e.target.value }
    else if (e.target.name === "password") { this.state.password = e.target.value }

    this.setState({
      username: this.state.username,
      password: this.state.password
    });
  }
  render() {
    return (
      <div id="auth">
        <h3>Login Form</h3>
        <p className={"alert alert-danger " + this.state.warning}>Incorrect username or password</p>
        <form onSubmit={this.formSubmit}>
          <div className="form-group">
            <input
              onChange={this.txtFieldChange}
              className="form-control"
              type="text"
              placeholder="Username"
              name="username" />
          </div>
          <div className="form-group">
            <input
              onChange={this.txtFieldChange}
              className="form-control"
              type="password"
              placeholder="Password"
              name="password" />
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    );
  }
}
class PrivatePage extends Component {
  constructor() {
    super();
    this.state = { data: null, loading: true, auth: false, username: null }
  }
  componentDidMount() {
    /* 
      TASK 3: When accessing this page/component, make sure that there is an authToken in your local storage.
        If there is no authToken, redirect to the login page.
        If there is an authToken, send a request to the '/privatedata' endpoint with the authToken included in the headers.*/
    if (localStorage.authToken !== undefined && localStorage.authToken !== null) {
      axios
        .get('http://localhost:3005/private', { headers: { 'authorization': localStorage.authToken } })
        .then((res => {
          if (res.status === 200) {
            this.setState({
              loading: false,
              auth: true,
              data: res.data
            })
          }
        })
        )
    }
    else (
      location.href = 'http://localhost:3000'
    )
    /* TASK 7: The response should include the username, display "Hello, [USERNAME]" on this page.
   */
  }
  render() {
    if (this.state.loading) {
      return <div>loading ...</div>;
    }
    else {
      return (
        <div>
          <h1>Private Page Data</h1>
          <h2>Hello, {this.state.data.username}</h2>
          <h3>Welcome to your top secret information on world domination.</h3>
          <h4>How to take over the world</h4>
          <p>The best way I figured out to take over the world with minimal death toll. So far this is my best plan it involves using agriculture as a bargining chip.
          </p>
          <h4>Step One: Unite 3rd world countries</h4>
          <p>Become the leader of a 3rd world country then use that power to influence the countries around you. Keep uniting all the countries in a certain area until you have a large area.</p>
          <h4>Step Two: Use the area you have control of</h4>
          <p>Now use the area under your control (now known as United Area) to halt trade between small countries until they join your side. Now are growing in power. Extend offers to other country to join you so their economy can still prosper </p>
          <h4>Step Three: Use your Power.</h4>
          <p>Now that you are supreme leader of the U.A.,Halt all trade between you and countries not yet on your side. This will act as kind of a siege to force the countries you warned into a economic depression. They will then be forced to join your side.</p>
          <h4>Run through</h4>
          <p>
            1) Unite Central and South America
              2) Get Africa to join you.
              3) Work across Europe and Lower Asia growing strength and numbers.
              4) Halt all trade between the most powerful nations forcing them onto your side
              5) Become the new ruler of world
          </p>
          <h4>Step Five: Profit</h4>
          <p className="profit">$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ GET THAT MONEY $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$</p>
        </div>
      );
    }
  }
}
class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: null,
      password: null
    };
    this.formSubmit = this.formSubmit.bind(this);
    this.txtFieldChange = this.txtFieldChange.bind(this);
  }
  formSubmit(e) {
    e.preventDefault();
    axios
      .post('http://localhost:3005/encrypt', this.state)
      .then((res) => {
        console.log(res);
      })
  }
  txtFieldChange(e) {
    if (e.target.name === "username") {
      this.state.username = e.target.value;
    }
    else if (e.target.name === "password") {
      this.state.password = e.target.value;
    }
    this.setState({
      username: this.state.username,
      password: this.state.password
    });
  }
  render() {
    return (
      <div id="auth">
        <h3>Registration Form</h3>
        <form onSubmit={this.formSubmit}>
          <div className="form-group">
            <input
              onChange={this.txtFieldChange}
              className="form-control"
              type="text"
              placeholder="Username"
              name="username" />
          </div>
          <div className="form-group">
            <input
              onChange={this.txtFieldChange}
              className="form-control"
              type="password"
              placeholder="Password"
              name="password" />
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export { App, Register, Login, PrivatePage };
