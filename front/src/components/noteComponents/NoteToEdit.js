import React, { Component } from 'react';
import Notes from '../../helpers/Notes';

export default class NoteToEdit extends Component {

    state = {
        id: this.props.note._id,
        title: this.props.note.title,
        description: this.props.note.description
    }

    onChange = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }


    handleSaveNote = async () => {
        await Notes.editNote(this.state, this.props.token);
        window.location.reload();
    }

    render() {

        return (
            <div className="col-md-5">
                <div className="card shadow d-flex justify-content-center">
                    <div className="card-header d-flex justify-content-center">
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title} className="border-0"/>
                    </div>
                    <div className="card-body d-flex flex-column justify-content-center description">
                        <p className="card-text">
                            <textarea name="description" onChange={this.onChange} value={this.state.description} className="border-0"/>
                        </p>
                        <div className="row justify-content-around buttons">
                            <div className="col-4">
                                <button className="btn btn-primary" onClick={this.handleSaveNote}>SAVE CHANGES</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}