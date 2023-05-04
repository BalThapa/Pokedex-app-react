import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import "./Header.css"

const Header = () => {
  return (
    <header className={"header"}>
      <Link to="/">
        <h1>PokeDex 2.0</h1>
      </Link>
      <Nav />
    </header>
  );
};

export default Header;