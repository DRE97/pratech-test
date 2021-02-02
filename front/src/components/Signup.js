import {useState} from 'react';
import Auth from '../helpers/Auth';
import {Route, Redirect} from 'react-router-dom';
import NavLoggedOut from './navbarComponents/NavLoggedOut';

async function signUp(username, email, password) {
    const token = await Auth.signup(username, email, password);
    return token
}

export default function Signin(props) {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [birth, setBirth] = useState("2021-01-01"); //YY-MM-DD
    const [gender, setGender] = useState('Not specified');
    const [city, setCity] = useState();
    const [checked, setCheck] = useState("false");

    const onSubmit = async e => {
        e.preventDefault();
        const userData = {
            username,
            email,
            password,
            birth,
            gender,
            city,
            checked
        }
        
        const {token, userId} = await signUp(userData)
        sessionStorage.setItem('token', JSON.stringify(token));
        sessionStorage.setItem('userId', JSON.stringify(userId));
        props.setToken(token);
        
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
                            SIGNUP
                        </div>
                        <div className="card-body">
                            <form onSubmit={onSubmit}>
                                <div className="form-group">
                                    <input type="text" minLength="5" name="username" placeholder="Username" className="form-control" onChange={e => setUsername(e.target.value)} required />
                                </div>
    
                                <div className="form-group">
                                    <input type="email" name="email" placeholder="Email" className="form-control" onChange={e => setEmail(e.target.value)} required />
                                </div>
                                
                                <div className="form-group">
                                    <input type="password" pattern=".{8,}" name="password" placeholder="Password" className="form-control" onChange={e => setPassword(e.target.value)} required />
                                    <small className="form-text text-muted">Min 8 characters</small>
                                </div>

                                <div className="form-group">
                                    <div className="row mr-sm-2">
                                        <div className="col-sm-4">
                                            <label htmlFor="birthday">Birthday:</label>
                                        </div>
                                        <div className="col-sm-8">
                                            <input type="date" onChange={e => setBirth(e.target.value)} name="birthday" />
                                        </div>
                                    </div>
                                </div>

                                <fieldset className="form-group">
                                    <div className="row">
                                    <legend className="col-form-label col-sm-4 pt-0">Gender</legend>
                                    <div className="col-sm-8">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="male" onChange={e => setGender(e.target.value)} />
                                            <label className="form-check-label" htmlFor="gridRadios1">
                                                M
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="female" onChange={e => setGender(e.target.value)} />
                                            <label className="form-check-label" htmlFor="gridRadios2">
                                                F
                                            </label>
                                        </div>
                                    </div>
                                    </div>
                                </fieldset>

                                <div className="col-auto my-1">
                                    <label className="mr-sm-2 sr-only" htmlFor="inlineFormCustomSelect">City</label>
                                    <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange={e => setCity(e.target.value)}>
                                        <option value="bogota">Bogota</option>
                                        <option value="medellin">Medellin</option>
                                        <option value="cali">Cali</option>
                                    </select>
                                </div>
                            
                                <button className="btn btn-primary btn-block mt-4" type="submit">Signup</button>
                                <br/>
                                <div className="form-group row">
                                    <div className="col-sm-12">
                                        <div className="form-check">
                                            <input className="form-check-input" value="true" type="checkbox" id="gridCheck1" onChange={e => setCheck(e.target.value)} required />
                                            <label className="form-check-label" htmlFor="gridCheck1">
                                            Remember me
                                            </label>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}