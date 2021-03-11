import React from 'react';

export default class BuyPage extends React.PureComponent { 

  render() {
    return (
      <div className="page availability" data-view="availability">
        <div className="availability__left">
          <a className="availability__logo" href>
            <img
              className="is-loading"
              src="static/logo.png"
              width={109}
              height={36}
            />
          </a>
          <h2 className="availability__number">SALE STRUCTURE</h2>
          <div className="availability__wrap">
            <ul className="availability__list">
              <li>
                <a href>
                  <div className="heading--3">AIRDROP</div>
                  For 1 hour, 3,000 PunkBodies will be availbe to be claimed
                  for those with a CryptoPunk in their wallet before the
                  airdrop starts.
                  <br />
                  <br />0 / 3000 Claimed
                </a>
              </li>
              <li>
                <a href>
                  <div className="heading--3">OG SALE</div>
                  For holders who missed the airdrop, they can buy their
                  bodies at a discounted price during the first tier of
                  sale.
                </a>
              </li>
              <li>
                <a href>
                  <div className="heading--3">PUBLIC SALE</div>
                  The remaining punks will be sold in tiers
                </a>
              </li>
            </ul>
            <div className="availability__info">
              Bodies are given at random. <br />
              after claim, punkbodies can be <br />
              sold on secondary market Opensea.io
            </div>
          </div>
        </div>
        <div className="availability__right">
          <a className="availability__logo" href>
            <img
              className="is-loading"
              src="static/logo2.png"
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
