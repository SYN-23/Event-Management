
import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import Login from './Components/Login/Login';
import sidebar_menu from './constants/sidebar-menu';
import Sidebar from './Components/Sidebar/Sidebar';
import Dashboard from './Components/Dashboard/Dashboard';
import { useEffect, useState } from 'react';
import AddEvent from './Components/AddEvent/AddEvent';
import EventGalary from './Components/EventGalary/EventGalary';
import EventList from './Components/EventList/EventList';
import BookingRequest from './Components/BookingReq/BookingRequest';


function App() {
  const [authenic,setAuthentic]=useState("");
 useEffect(()=>{
  if(localStorage.getItem('authenticated'))
  {
      const authenticated = localStorage.getItem('authenticated')
      setAuthentic(authenticated);
  }
 },[])
   
  return (
    <Router>
      <div className='dashboard-container'>
        {authenic===''?(
        <div/>
        ):(
          <Sidebar className='sidebar' menu={sidebar_menu} />
        )}
       
          
          <div className='dashboard-body'>
              <Routes>
                  <Route path="/login" element={<Login></Login>} />
                  <Route exact path="/" element={<Dashboard></Dashboard>} />
                  <Route exact path="/addEvent" element={<AddEvent></AddEvent>} />
                  <Route exact path="/manageEvent" element={<EventGalary></EventGalary>} />
                  <Route exact path="/eventList" element={<EventList></EventList>} />
                  <Route exact path="/booking" element={<BookingRequest></BookingRequest>} />
              </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
