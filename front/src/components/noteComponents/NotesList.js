import React, { Component } from 'react';
import Notes from '../../helpers/Notes';
import Note from './Note';


export default class NotesList extends Component {

    state = {
        responseNotes: [],
        filteredNotes: []
    }

    async componentDidMount() {
        const notes = await Notes.getNotes();
        this.setState({responseNotes: notes, filteredNotes: notes});
    }

    filterNotes = (filter) => {
        if(filter) {
            if(filter.length > 3) {
                console.log(filter);
                const filterNote = this.state.responseNotes.filter((note) => 
                    note._id.includes(filter)
                );
                setTimeout(() => {
                    this.setState({filteredNotes: filterNote})
                }, 300);
                return filterNote
            } else {
                setTimeout(() => {
                    this.setState({filteredNotes: this.state.responseNotes})
                }, 300);
            }
        } else {
            return this.state.notes
        }
    }


    render() {
        return (
            <div>
                <h1 className="mt-4 offset-md-5">MY NOTES</h1>
                <div className="container mt-8 d-flex flex-column justify-content-center">
                    <div className="row mt-4">
                        <div className="col-md-6 offset-md-2">
                            <div className="form-group offset-md-3 text-center">
                                <small className="form-text text-muted">Search a note by id</small>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => this.filterNotes(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row mt-5">
                        {
                            this.state.filteredNotes.map(note => {
                                return <Note key={note._id} token={this.props.token} note={note} />
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
