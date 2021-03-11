import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <header className="header">
        <nav className="nav">
          <div className="nav__content">
            <div className="nav__menus">
              <ul className="nav__primary">
                <li>
                  <Link to="/">
                    <span>Information</span>
                  </Link>
                  <ul className="nav__primary__submenu">
                    <li>
                      <Link to="faq">
                        <span>FAQ</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="legal">
                        <span>Legal</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="buy">
                    <span>Purchase</span>
                  </Link>
                </li>
                <li>
                  <Link to="gallery">
                    <span>Gallery</span>
                  </Link>
                </li>
              </ul>
              <ul className="nav__secondary">
                <li>
                  <a href="showcase">
                    <span>Showcase</span>
                  </a>
                </li>
                <li>
                  <a href="wallet">
                    <span>Wallet</span>
                  </a>
                </li>
                <li>
                  <a href="contact">
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
              <img
                src="public/logo.png"
                height="40px"
                className="is-loading"
                alt="PunkBodies"
              />
            </div>
          </div>
        </nav>
        <button className="js-nav__toggle nav__toggle">
          <i />
          <i />
          <i />
        </button>
      </header>
    );
  }
}

export default Header;
