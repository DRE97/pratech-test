import React, { Component } from 'react';
import Auth from '../../helpers/Auth';

export default class NavLoggedIn extends Component {

    handleLogout = async () => {
        await Auth.logout(() => {
            this.props.history.push('/login')
        });
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">PRATECH</a>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
    
                        <li className="nav-item mr-1">
                            <a href="/notes" className="nav-link">My Notes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/new-note">New Note</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/profile">Profile</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/login" onClick={this.handleLogout}>Logout</a>
                        </li>
    
                    </ul>
                </div>
            </nav>
        )
    }
}

