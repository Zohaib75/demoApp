import React, {useContext} from 'react';
import {UserContext} from '../index';
import Form from './Form';

function Login() {
    const { login } = useContext(UserContext);

    return (
      <>
        <h1>Please, log in!</h1>
        
        <Form 
            inputs={[
                {name: 'email', placeholder: 'Email', type: 'text'},
                {name: 'password', placeholder: 'Password', type: 'password'}
            ]}

            button={{
                name: 'Login'
            }}
            onSubmit={login}
        />

      </>
    );
  }

export default Login;