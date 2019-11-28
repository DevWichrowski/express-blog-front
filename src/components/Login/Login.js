import React from 'react';
import "./Login.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Login = props => {
    return (
        <div className="login">
            <h1>Login</h1>
            <form action="POST" className="login-form">
                <TextField id="outlined-basic" label="Login" variant="outlined" className="form-text-field"/>
                <TextField id="outlined-basic" label="Password" variant="outlined" type="password"
                           className="form-text-field"/>
                <Button variant="contained" color="primary">
                    Login
                </Button>
            </form>
        </div>
    );
}

export default Login;