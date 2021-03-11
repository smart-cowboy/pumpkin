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
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import './style.scss';

const App = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/public/siteb030.js";
    script.async = true;
    document.body.appendChild(script);
  });
  
  return (
    <div>
      <Header />
      <div className="content">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/buy" component={BuyPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
