import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import UserService from '../../Services/user';
import './style.css';

const LoginScreen = () => {
    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const _handleChange = (e) =>{
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    const _handleSubmit = (e) => {
        e.preventDefault();
        UserService.login(state)
        //console.log(state);
    }

    return (
        <Container maxWidth="sm" className="login-form">
            <form onSubmit={_handleSubmit}>
            <h1>Login</h1>
            <div><TextField
            id="email"
            name="email"
            onChange= {_handleChange}
            label="Email"
            margin="normal"
            variant="outlined"
            fullWidth
            /></div>
            <div>
            <TextField
            id="password"
            name="password"
            onChange= {_handleChange}
            label="Password"
            type = "password"
            margin="normal"
            variant="outlined"
            fullWidth
            /></div>
            <div><Button variant="contained" color="primary" size="medium" className="btn" type="submit">Login</Button></div>
            </form>
        </Container>
    );
}

export default LoginScreen;
