import React from 'react';
import {
  Link, NavLink
} from "react-router-dom";

import './styles/Header.css'

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav className='menu' >
          <ul className='menu-list' >
            <li className='menu-item' >
              <NavLink exact to='/' activeClassName="isActive"  >Accueil</NavLink>
            </li>
            <li className='menu-item' >
              <NavLink to='/restaurant' activeClassName="isActive"  >Restaurant</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header;
