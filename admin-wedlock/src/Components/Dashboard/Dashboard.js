import React from 'react';
import sidebar_menu from '../../constants/sidebar-menu';
import Sidebar from '../Sidebar/Sidebar';
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
          {/* <Sidebar menu={sidebar_menu} /> */}
          <h4>Dashboard</h4>  
        </div>
    );
}

export default Dashboard;
