import User from './models/User';
import Note from './models/Note';

export const createUser = async () => {

    try {
        
        const count = await User.estimatedDocumentCount();

        if(count > 0) return;

        const userData = {
            username: "admin",
            email: "admin@hotmail.com",
            password: "admin",
            birth: "2021-02-02",
            gender: "male",
            city: "medellin",
            checked: "true"
        }

        const values = await Promise.all([
            new User(userData).save()
        ]);

        console.log(values);

    } catch (error) {
        console.error(error);
    }

}

export const createNotes = async () => {

    try {
        
        const count = await Note.estimatedDocumentCount();

        if(count > 0) return;

        const noteData = {
            title: "Bienvenido",
            description: "a la aplicacion de notas"
        }

        const values = await Promise.all([
            new Note(noteData).save()
        ]);

        console.log(values);

    } catch (error) {
        console.error(error);
    }

}