import React from 'react';

export default class BuyPage extends React.PureComponent {

  render() {
    return (
      <div className="page availability" data-view="availability">
        <div className="availability__left">
          <a className="availability__logo" href="index.html">
            <img
              className="is-loading"
              src="public/logo.png"
              width={109}
              height={36}
            />
          </a>
          <h2 className="availability__number">WALLET</h2>
          <div className="availability__wrap">
            <ul className="availability__list">
              <li>
                <a href>
                  <div className="heading--3">CONNECT WALLET</div>
                </a>
              </li>
              <li>
                <a href>
                  <div className="heading--3">VIEW ASSETS</div>
                </a>
              </li>
              <li>
                <a href>
                  <div className="heading--3">VERIFY OWNERSHIP</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="availability__right">
          <a className="availability__logo" href>
            <img
              className="is-loading"
              src="public/logo2.png"
              width={109}
              height={36}
            />
          </a>
        </div>
        <div className="availability__center" />
      </div>
    );
  }
}

BuyPage.propTypes = {
};
