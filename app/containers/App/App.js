/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import BuyPage from 'containers/BuyPage/Loadable';
import GalleryPage from 'containers/GalleryPage/Loadable';
import ShowcasePage from 'containers/ShowcasePage/Loadable';
import WalletPage from 'containers/WalletPage/Loadable';
import ContactPage from 'containers/ContactPage/Loadable';
import FaqPage from 'containers/FaqPage/Loadable';
import LegalPage from 'containers/LegalPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import './style.scss';

const App = () => {
  useEffect(() => {
    const modernizr = document.createElement("script");
    modernizr.src = "/public/modernizr.js";
    modernizr.async = true;
    document.body.appendChild(modernizr);
    const script = document.createElement("script");
    script.src = "/public/siteb030.js";
    script.async = true;
    document.body.appendChild(script);
  });
  
  return (
    <div>
      <Header />
      <main className="content">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/buy" component={BuyPage} />
          <Route path="/gallery" component={GalleryPage} />
          <Route path="/showcase" component={ShowcasePage} />
          <Route path="/wallet" component={WalletPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/faq" component={FaqPage} />
          <Route path="/legal" component={LegalPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
