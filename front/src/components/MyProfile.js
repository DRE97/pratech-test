import React, { Component } from 'react'
import Profile from '../helpers/Profile';

export default class MyProfile extends Component {

    state = {
        user: {}
    }

    getUserData = async (token, userId) => {
        const userData = await Profile.getMyData(token, userId);
        return userData
    }

    async componentDidMount() {
        const user = await this.getUserData(this.props.userId)
        this.setState({user: user});
    }

    render() {
        return (
            <div className="offset-md-3">
                <div className="row my-4 offset-md-2">
                    <div className="col-md-4 text-center">
                        <h1>PROFILE</h1>
                    </div>
                </div>
                
                <div className="row mt-4">
                    <div className="col-md-8">
                        <div className="card border-dark mb-3">
                            <div className="card-header text-center">
                                <h3 className="card-title">{this.state.user.username}</h3>
                            </div>
                            <div className="card-body text-dark">
                                <div className="mb-4">
                                    <small className="form-text text-muted">Email:</small>
                                    <h6 className="card-title">{this.state.user.email}</h6>
                                </div>

                                <div className="mb-4">
                                    <small className="form-text text-muted">City:</small>
                                    <h6 className="card-title">{this.state.user.city}</h6>
                                </div>

                                <div className="mb-4">
                                    <small className="form-text text-muted">Gender:</small>
                                    <h6 className="card-title">{this.state.user.gender}</h6>
                                </div>

                                <div className="mb-4">
                                    <small className="form-text text-muted">Birth:</small>
                                    <h6 className="card-title">{this.state.user.birth}</h6>
                                </div>
                                
                                <div className="mb-4">
                                    <small className="form-text text-muted">Remember profile?</small>
                                    <h6 className="card-title">{this.state.user.checked}</h6>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
