import axios from 'axios';


class Auth {
    constructor() {
        this.authenticated = false;
        this.userLogged = {}
    }

    login = async (email, password) => {

        const response = await axios.post('http://localhost:4000/api/signin', {
            email: email,
            password: password
        });

        const token = response.data.token;
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
        
        const token = response.data.token;

        if(!token) {
            alert(response.data.message);
            return(false);
        }

        const userId = response.data.savedUser._id;
        
        return {token, userId};
        
    }

    isAuthenticated = () => {
        return this.authenticated;
    }
    
    userLoggedIn = async () => {
        return JSON.parse(localStorage.getItem('user'));
    }


}

export default new Auth();