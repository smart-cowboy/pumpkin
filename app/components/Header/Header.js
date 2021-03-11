import React from 'react';
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
                  <a href="index.html">
                    <span>Information</span>
                  </a>
                  <ul className="nav__primary__submenu">
                    <li>
                      <a href="faq.html">
                        <span>FAQ</span>
                      </a>
                    </li>
                    <li>
                      <a href="legal.html">
                        <span>Legal</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="buy.html">
                    <span>Purchase</span>
                  </a>
                </li>
                <li>
                  <a href="gallery.html">
                    <span>Gallery</span>
                  </a>
                </li>
              </ul>
              <ul className="nav__secondary">
                <li>
                  <a href="showcase.html">
                    <span>Showcase</span>
                  </a>
                </li>
                <li>
                  <a href="wallet.html">
                    <span>Wallet</span>
                  </a>
                </li>
                <li>
                  <a href="contact.html">
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
              <img
                src="static/logo.png"
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
