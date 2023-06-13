import React from 'react';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
   let navigate=useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('authenticated'))
        {
            const authenticated = localStorage.getItem('authenticated')
    
            if(authenticated === false)
            {
                navigate('/login') 
            }
        }
        else{
            navigate('/login')   
        }
       },[])
    return (
        <div>
          <h1>Dashboard</h1>  
        </div>
    );
}

export default Dashboard;
