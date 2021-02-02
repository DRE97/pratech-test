import React, { Component } from 'react';
import NoteToEdit from './NoteToEdit';
import Notes from '../../helpers/Notes';

export default class Note extends Component {

    state = {
        editNote: false,
        id: this.props.note._id
    }

    handleEdit = () => {
        this.setState((state) => ({
            editNote: !state.editNote
        }));
    }

    handleDelete = async () => {
        console.log(this.state.id);
        await Notes.deleteNote(this.state.id, this.props.token);
        window.location.reload();
        alert('Note deleted');
    }

    render() {

        const note = this.props.note;

        if(!this.state.editNote) {
            return (
                <div className="col-md-6 mb-5">
                    <div className="card shadow d-flex justify-content-center">
                        <div className="card-header d-flex flex-column justify-content-center">
                            <h6 className="d-block">{note.title}</h6>
                            <small className="form-text text-muted">ID: {note._id}</small>
                        </div>
                        <div className="card-body d-flex flex-column justify-content-center description">
                            <p className="card-text">
                                {note.description}
                            </p>
                            <div className="row mt-2 col-md-6 offset-md-3">
                                <div className="col-6">
                                    <button className="btn btn-primary" onClick={this.handleEdit}>EDIT</button>
                                </div>
                                <div className="col-6">
                                    <button className="btn btn-danger" onClick={this.handleDelete}>DELETE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <NoteToEdit token={this.props.token} note={note} />
            );
        }
    }
}
