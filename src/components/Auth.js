import React, { useState} from 'react';

import Login from './Login';
import Signup from './Signup';


export default function Auth(){
    const[page, setPage] = useState(0);

    const changePage = (pageNumber) =>{
        setPage(pageNumber);
    }
    
    return (
        <>
            <button onClick={()=>changePage(0)}>Login</button>
            <button onClick={()=>changePage(1)}>Signup</button>

            {
                page === 0 ? <Login/> : <Signup/>
            }
         </>
      );
} 