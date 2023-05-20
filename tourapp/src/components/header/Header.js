import React from 'react';
import '../header/Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Hamada's Travel Agency</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;