import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import { capitalize } from '../../services/util/Util';

const navItems = ['dashboard', 'search'];

const Navigation = () => {
    return(
        <nav className="nav-bar">
            {
                navItems.map((e, index) => <Link key={index} className="nav-link" to={'/' + e}>{capitalize(e)}</Link>)
            }
        </nav>
    );
}

export default Navigation;
