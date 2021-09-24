import React from 'react';
import {
  Link
} from "react-router-dom";

import './styles/Header.css'

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav className='menu' >
          <ul className='menu-list' >
            <li className='menu-item' >
              <Link to='/'>Accueil</Link>
            </li>
            <li className='menu-item' >
              <Link to='/restaurant'>Restaurant</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header;
