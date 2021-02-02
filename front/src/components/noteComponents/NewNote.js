import React, { Component } from 'react';
import Notes from '../../helpers/Notes';
import {Route, Redirect} from 'react-router-dom';

export default class NewNote extends Component {

    state = {
        done: false,
        title: "",
        description: ""
    }

    onChange = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }
    
    handleCreateNote = async () => {
        const done = await Notes.createNote(this.state, this.props.token);
        this.setState({done: done});
    }

    render() {
        if(!this.state.done) {
            return (
                <div className="row">
                    <div className="col-md-4 offset-md-4 mt-5">
                        <div className="card shadow d-flex justify-content-center">
                            <div className="card-header d-flex justify-content-center">
                                <input type="text" name="title" onChange={this.onChange} placeholder="Title" className="form-control form-control-lg"/>
                            </div>
                            <div className="card-body d-flex flex-column justify-content-center">
                                <div>
                                    <textarea onChange={this.onChange} name="description" placeholder="Description" className="form-control form-control-lg"/>
                                </div>

                                <div>
                                    <div className="col-4 mt-2">
                                        <button className="btn btn-primary mt-2" onClick={this.handleCreateNote}>Create</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <Route>
                    <Redirect to="/notes" />
                </Route>
            );
        }
    }
}
