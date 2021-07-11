import React from 'react'
import { NavLink, Link } from "react-router-dom";
import DehazeIcon from '@material-ui/icons/Dehaze';
import IconButton from '@material-ui/core/IconButton';
import profile_url from '../media/profile.png';
import { SidebarItem } from './SidebarItem';
import '../css/Navbar.css';

export default function Header({ sidebar, setSidebar }) {
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <header className='header'>
            <div>
                <IconButton color="inherit" aria-label="Menu" className='name' onClick={showSidebar}>
                    <DehazeIcon />
                </IconButton>

                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} >
                    <ul className='nav-menu-items' >
                        {SidebarItem.map((item, index) => {
                            return (
                                <li key={index} className={item.cName} onClick={showSidebar}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <h3 className='name'>FINFO</h3>
            </div>
            <NavLink to="/" className="x"><img src={profile_url} alt="profile" align-self="center" width='100px' height='100px' border-radius='50%' /></NavLink>
        </header>
    )
}
