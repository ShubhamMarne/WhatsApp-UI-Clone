import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import {auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionType } from './reducer';

function Login() {
    const [{}, dispatch] = useStateValue();



    const signIn  = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionType.SET_USER,
                    user: result.user,
                })
            })
            .catch(error => alert("failed"));
    }


    return (
        <div className="login">
            <div className="login_container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="" />
                <div className="login_test">
                    <h1>Sign in to WhatsApp</h1>
                </div>
                <Button type="submit" onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login;
;