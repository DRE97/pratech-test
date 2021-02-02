import {useState} from 'react';
import Auth from '../helpers/Auth';
import {Route, Redirect} from 'react-router-dom';
import NavLoggedOut from './navbarComponents/NavLoggedOut';


async function loginUser(email, password) {
    const token = await Auth.login(email, password);
    return token
}

export default function Signin(props) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const handleSubmit = async e => {
        e.preventDefault();
        const data = await loginUser(email, password);
        if(data.token) {
            const {token, userId} = data;
            sessionStorage.setItem('token', JSON.stringify(token));
            sessionStorage.setItem('userId', JSON.stringify(userId));
            props.setToken(token);
        }
    }

    if(props.token) {
        return (
            <Route>
                <Redirect to="/notes" />
            </Route>
        );
    }

    return (
        <div>
            <NavLoggedOut />
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card mt-4 text-center">
                        <div className="card-header">
                            LOGIN
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input type="email" name="email" placeholder="Email" className="form-control" onChange={e => setEmail(e.target.value)} />
                                </div>
                                
                                <div className="form-group">
                                    <input type="password" name="password" placeholder="Password" className="form-control" onChange={e => setPassword(e.target.value)} />
                                </div>
                            
                                <button className="btn btn-primary btn-block mt-4" type="submit">LOGIN</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}