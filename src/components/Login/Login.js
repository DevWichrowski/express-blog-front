import React, {useState} from 'react';
import "./Login.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Login = props => {

    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);

    const submit = () => {
        console.log('login', login);
        console.log('password', password);
    };

    return (
        <div className="login">
            <h1>Login</h1>
            <form className="login-form">
                <TextField
                    className="form-text-field"
                    id="outlined-basic"
                    label="Login"
                    variant="outlined"
                    onChange={e => setLogin(e.target.value)}
                />
                <TextField
                    className="form-text-field"
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick={submit}>
                    Login
                </Button>
            </form>
        </div>
    );
}

export default Login;