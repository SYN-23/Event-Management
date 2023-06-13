import React, {useEffect, useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import LogoutIcon from '../../assets/icons/logout.svg';
import SideBarItem from './SideBarItem';
import './Sidebar.css'
const Sidebar = ({menu}) => {
    const location = useLocation();

    const [active, setActive] = useState(1);
    let navigate=useNavigate();
    useEffect(() => {
     menu.forEach(element => {
            if (location.pathname === element.path) {
                setActive(element.id);
            }
        });
    }, [location.pathname])

    const __navigate = (id) => {
        setActive(id);
    }


    const logoutHandeler=()=>{
      localStorage.removeItem('authenticated');
     
      navigate('/login');
      window.location.reload(true);
    }
    return (
        <div>
            <nav className='sidebar'>
            <div className='sidebar-container'>
                <div className='sidebar-logo-container'>
                    <h1>Wedlock</h1>
                </div>

                <div className='sidebar-container'>
                    <div className='sidebar-items'>
                        {menu.map((item, index) => (
                            <div key={index} onClick={() => __navigate(item.id)}>
                                <SideBarItem
                                    active={item.id === active}
                                    item={item} />
                            </div>
                        ))}
                    </div>

                    <div className='sidebar-footer'>
                        <span className='sidebar-item-label'>Logout</span>
                        <img 
                            src={LogoutIcon}
                            alt='icon-logout'
                            className='sidebar-item-icon' 
                            onClick={logoutHandeler}/>
                    </div>
                </div>
            </div>
        </nav>
        </div>
    );
}

export default Sidebar;
