import {createContext} from 'react';

export const CredContext = createContext({ email: '', password: ''});

export const AuthContext = createContext({ auth: false});
