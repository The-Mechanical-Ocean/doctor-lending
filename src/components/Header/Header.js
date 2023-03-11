import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__img-container">
        <a href="" className="header__link">
          <div className="header__face-img"></div>
        </a>
        <a href="#" className="header__link">
          <div className="header__inst-img"> </div>
        </a>
        <a href="#" className="header__link">
          <div className="header__twit-img"></div>
        </a>
      </div>
      <h1 className="header__title">Центер Доктора Лабунца</h1>
      <div className="header__menu"></div>
    </header>
  );
}

export default Header;
