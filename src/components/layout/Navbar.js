import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
*@author nilupul gamage
*@since 22/08/2021
*/
const Navbar = ({ icon, title }) => {

     return (
          <nav className='navbar bg-primary'>
               <h1>
                    <i className={icon}></i>{title}
               </h1>
               <ul>
                    <li>
                         <Link to="/">Home 🏠</Link>
                    </li>
                    <li>
                         <Link to="/about">About 👨‍👨‍👧‍👧</Link>
                    </li>
               </ul>
          </nav>
     )
}

Navbar.defaultProps = {
     title: ' GitHub-Finder',
     icon: 'fab fa-github'
};

Navbar.propTypes = {
     title: PropTypes.string.isRequired,
     icon: PropTypes.string.isRequired,
};

export default Navbar
