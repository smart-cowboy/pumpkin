import React from 'react';

export default class ShowcasePage extends React.PureComponent {

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
          <h2 className="availability__number">INSTRUCTIONS</h2>
          <div className="heading--3">
            To combine your new PunkBody with your Crypto Punk
              </div>
          <div className="availability__wrap">
            <ul className="availability__list">
              <li>
                <a href>
                  <div className="heading--3">CONNECT TO WALLET</div>
                      Connect using the button on the side
                    </a>
              </li>
              <li>
                <a href>
                  <div className="heading--3">SELECT PUNK</div>
                      Select the punk you want to combine with your body
                    </a>
              </li>
              <li>
                <a href>
                  <div className="heading--3">Combine</div>
                      Combine the two
                    </a>
              </li>
              <li>
                <a href>
                  <div className="heading--3">Download OR Mint</div>
                      Download or mint your full Punk avatar
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
          <h2 className="availability__number" href>
            CONNECT WALLET
              </h2>
        </div>
        <div className="availability__center" />
      </div>
    );
  }
}

BuyPage.propTypes = {
};
