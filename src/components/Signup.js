import React, {useContext} from 'react';
import {UserContext} from '../index';
import Form from './Form';

function Login() {
    const { signup } = useContext(UserContext);
  
    return (
      <>
        <h1>Please, Sign Up!</h1>
        
        <Form 
            inputs={[
                {name: 'email', placeholder: 'Email', type: 'text'},
                {name: 'password', placeholder: 'Password', type: 'password'},
                {name: 'confirmPassword', placeholder: 'Confirm Password', type: 'password'}
            ]}

            button={{
                name: 'Signup'
            }}
            onSubmit={signup}
        />

      </>
    );
  }

export default Login;