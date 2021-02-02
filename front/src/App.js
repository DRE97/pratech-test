import './App.css';
import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavLoggedOut from './components/navbarComponents/NavLoggedOut';
import NavLoggedIn from './components/navbarComponents/NavLoggedIn';
import Signin from './components/Signin';
import Signup from './components/Signup';
import NotesList from './components/noteComponents/NotesList';
import NewNote from './components/noteComponents/NewNote';
import MyProfile from './components/MyProfile';


export default class App extends Component {

  state = {
    token: '',
    userId: ''
  }

  getToken = () => {
    const token = window.sessionStorage.token;
    if(token) {
      return token
    }
  };

  getUserId = () => {
    const userId = window.sessionStorage.userId;
    if(userId) {
      return userId
    }
  };

  setToken = (token) => {
    this.setState({token: token});
  }

  render() {

    let token = this.getToken();

    if(!token) {
      return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <NavLoggedOut />
            </Route>
            <Route path="/login">
              <Signin setToken={this.setToken} />
            </Route>
            <Route path="/signup">
              <Signup setToken={this.setToken} />
            </Route>
          </Switch>
        </BrowserRouter>
      );
    } else {
      return (
        <div className="app">
          <BrowserRouter>
            <NavLoggedIn />
            <Switch>
              <Route path="/notes">
                <NotesList token={token} />
              </Route>
              <Route path="/new-note">
                <NewNote token={token} />
              </Route>
              <Route path="/profile">
                <MyProfile token={token} userId={this.getUserId()} />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      );
    }
  }
}