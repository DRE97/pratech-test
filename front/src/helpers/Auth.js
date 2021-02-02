import axios from 'axios';


class Auth {

    login = async (email, password) => {

        const response = await axios.post('http://localhost:4000/api/signin', {
            email: email,
            password: password
        });

        //console.log(response.data);

        const token = response.data.token;

        if(!token) {
            alert(response.data.message);
            return(response.data);
        }

        const userId = response.data.userId;
        
        return {token, userId};

    }

    logout = async () => {
        this.authenticated = false;
        sessionStorage.clear();
    }


    signup = async (userData) => {
        console.log(userData);
        const {
            username,
            email,
            password,
            birth,
            gender,
            city,
            checked
        } = userData
        
        const response = await axios.post('http://localhost:4000/api/signup', {
            username,
            email,
            password,
            birth,
            gender,
            city,
            checked
        });

        //console.log(response);
        
        const token = response.data.token;

        if(!token) {
            alert(response.data.message);
            return(response.data);
        }

        const userId = response.data.savedUser._id;
        
        return {token, userId};
        
    }

}

export default new Auth();