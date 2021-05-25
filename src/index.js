import React, { createContext, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export const UserContext = createContext({ email: '', password: '', auth: false });

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ email: '', password: '', auth: false });

  const signup = ({email, password}) => {
    setUser((user) => ({
      ...user,
      email,
      password
    }));
  };

  const login = ({email, password}) => {
    if(email === user.email && password === user.password){
          setUser((user) => ({
            ...user,
            email,
            password,
            auth: true,
          }));
    }
  };

  const logout = () => {
    setUser((user) => ({
      ...user,
      auth: false,
    }));
  };

  return (
    <UserContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </UserContext.Provider>
  );
};

ReactDOM.render(
    <UserProvider>
      <App />
    </UserProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
