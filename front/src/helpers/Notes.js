import axios from 'axios';

class Notes {
    constructor() {
        this.baseUrl = 'http://localhost:4000/api/notes';
    }

    getNotes = async () => {

        const response = await axios.get('http://localhost:4000/api/notes/allNotes');
        return response.data;
    }

    createNote = async (data, userToken) => {
        const token = userToken.slice(1, -1);
                
        const authAxios = axios.create({
            baseURL: this.baseUrl,
            headers: {
                'access-token': token
            }
        });
        
        await authAxios.post('/create', {
            title: data.title,
            description: data.description
        });
        
        return true
    }

    deleteNote = async (id, userToken) => {
        const noteId = id;
        const token = userToken.slice(1, -1);
        
        console.log(noteId);

        const authAxios = axios.create({
            baseURL: this.baseUrl,
            headers: {
                'access-token': token
            }
        });

        await authAxios.delete(`http://localhost:4000/api/notes/delete/${noteId}`);
        
    }

    editNote = async(data, userToken) => {

        const token = userToken.slice(1, -1);

        const authAxios = axios.create({
            baseURL: this.baseUrl,
            headers: {
                'access-token': token
            }
        });

        console.log(data);

        await authAxios.put(`/update/${data.id}`, {
            title: data.title,
            description: data.description
        });

    }

}

export default new Notes();