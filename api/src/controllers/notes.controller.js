import Note from '../models/Note';

export const getAllNotes = async (req, res) => {

    const {userId} = req.body;

    const notes = await Note.find({userId: userId});

    res.send(notes);

}

export const getSingleNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.send(note);
}

export const createNote = async (req, res) => {

    const {title, description, userId} = req.body;
    
    const newNote = new Note({
        title,
        description,
        userId
    });

    const savedNote = await newNote.save();

    res.send(savedNote);

}

export const updateNote = async (req, res) => {
    const {title, description} = req.body;

    const note = await Note.findByIdAndUpdate(req.params.id, {title, description});

    res.send("NOTE UPDATED");
}

export const deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);

    res.send("NOTE DELETED");
}