import React, { Component } from 'react'

export default class NavLoggedOut extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">PRATECH</a>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
    
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/signup">Signup</a>
                        </li>
    
                    </ul>
                </div>
            </nav>
        )
    }
}
