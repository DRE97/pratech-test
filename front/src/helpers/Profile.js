import axios from 'axios';

class Profile {

    getMyData = async (userId) => {
        const id = userId.slice(1, -1);
        
        const response = await axios.get(`http://localhost:4000/api/profile/${id}`);
        
        return response.data;
    }

}

export default new Profile();