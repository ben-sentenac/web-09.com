import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import './navigation.styles.scss';



const Navigation = () => {
    const [ visible, setVisible ] = useState(false);

    const toggleNavbar = (e) => {
        setVisible(!visible);
    }
    return (
        <>
        <header className="site-header">
            <div onClick={ toggleNavbar } className="hamburger">
                <span className="hamburger-span"></span>
                <span className="hamburger-span"></span>
                <span className="hamburger-span"></span>
            </div>
            <nav className={`main-navbar ${ visible ? 'visible' :  ''}`}>
                <a className="nav-link" href="#home">Home</a>
                <a className="nav-link" href="#about">About</a>
                <a className="nav-link" href="#portfolio">Portfolio</a>
                <a className="nav-link" href="#tarifs">Tarifs</a>
                <a className="nav-link" href="#contact">Contact</a>
            </nav>
        </header>
        <Outlet />
    </>
    );
};

export default Navigation;