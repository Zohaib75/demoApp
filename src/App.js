import './App.css';
import React, {useContext} from 'react';
import Auth from './components/Auth';
import Home from './components/Home';
import{UserContext} from './index'

function App() {
  const { user } = useContext(UserContext);

  return (
        <div className="App">
        {
          user.auth ? <Home /> : <Auth />
        } 
        </div>
  );
}

export default App;
