import React from 'react';;
import logo from '../../assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Header.css';

const Header = () => {
    return (
        <nav className={`py-0 hello`}>
            <div className="flex logo-container items-center mr-1">
                <img
                    src={logo}
                    alt="Logo"
                    className="h-9 w-35"
                />
            </div>
        </nav>
    );
};

export default Header;
