import React from 'react';

const Header = () => {
  return (
    <div className="react-header">
      <header className="header">
        <div className="header__icons">
          <a href="/#">
            <i className="fas fa-globe-americas">Crashcourse</i>
          </a>
        </div>
        <div className="header__buttons">
          <button type="button">Registrate Gratis</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
