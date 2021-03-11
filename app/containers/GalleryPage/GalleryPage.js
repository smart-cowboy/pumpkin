import React from 'react';

export default class GalleryPage extends React.PureComponent { 

  render() {
    return (
      <div className="page hood js-scroll" data-view="neighborhood">
        <div className="hood__content">
          <div className="hood__hero">
            <picture>
              <source
                media="(min-width: 701px)"
                srcSet="public/gallery_background.jpg"
              />
              <source
                media="(max-width: 700px)"
                srcSet="public/gallery_background.jpg"
              />
              <img
                src="public/gallery_background.jpg"
                alt
                className="is-loading"
              />
            </picture>
            <div className="hood__hero__history">
              <p className="paragarph">
                View our gallery. Here is a directory of every single
                Punkbody in existence. Feel free to look through everything.
              </p>
            </div>
            <div className="arrow arrow--home js-arrow">
              <svg viewBox="0 0 30 30">
                <use
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xlinkHref="#icon-arrow-down"
                />
              </svg>
            </div>
          </div>
          <div className="hood__info">
            <div className="hood__info__col">
              <h1 className="heading--2">Rarity</h1>
              <p className="paragraph">Blah blah blah blah blah</p>
            </div>
            <div className="hood__info__col">
              <h2 className="heading--2">Summary</h2>
              <p className="paragraph">
                <em>
                  10,000 bodies
                  <br />
                  5 types
                  <br />
                  11 tops
                  <br />
                  6 bottoms
                  <br />
                </em>
              </p>
            </div>
          </div>
          <div className="hood__map">
            <div className="hood__map__header">
              <h2 className="heading--2">Search</h2>
              <ul className="hood__map__filter">
                <li className="is-current">
                  <a href="#all" className="js-hoodMapFilter">
                    Aliens
                  </a>
                </li>
                <li className>
                  <a href="#aliens" className="js-hoodMapFilter">
                    Zombies
                  </a>
                </li>
                <li className>
                  <a href="#zombies" className="js-hoodMapFilter">
                    Apes
                  </a>
                </li>
                <li className>
                  <a href="#apes" className="js-hoodMapFilter">
                    Women
                  </a>
                </li>
                <li className="hood__map__filter__trigger js-hoodMapFilterTrigger" />
              </ul>
            </div>
            <div className="hood__map__list">
              <ol className="is-current js-hoodMapList">
                <li id="attributes_1" data-category="attributes">
                  <span className="hood__map__list__no">01</span>
                  <span className="hood__map__list__name">
                    White Shirt<span></span>
                  </span>
                </li>
                <li id="attributes_2" data-category="attributes">
                  <span className="hood__map__list__no">02</span>
                  <span className="hood__map__list__name">
                    Blue Pants<span></span>
                  </span>
                </li>
                <li id="attributes_3" data-category="attributes">
                  <span className="hood__map__list__no">03</span>
                  <span className="hood__map__list__name">
                    Yellow Shoes<span></span>
                  </span>
                </li>
              </ol>
              <ol className=" js-hoodMapList">
                <li id="attributes_1" data-category="attributes">
                  <span className="hood__map__list__no">01</span>
                  <span className="hood__map__list__name">
                    White Shirt<span></span>
                  </span>
                </li>
                <li id="attributes_2" data-category="attributes">
                  <span className="hood__map__list__no">02</span>
                  <span className="hood__map__list__name">
                    Blue Pants<span></span>
                  </span>
                </li>
                <li id="attributes_3" data-category="attributes">
                  <span className="hood__map__list__no">03</span>
                  <span className="hood__map__list__name">
                    Yellow Shoes<span></span>
                  </span>
                </li>
              </ol>
              <ol className=" js-hoodMapList">
                <li id="attributes_1" data-category="attributes">
                  <span className="hood__map__list__no">01</span>
                  <span className="hood__map__list__name">
                    White Shirt<span></span>
                  </span>
                </li>
                <li id="attributes_2" data-category="attributes">
                  <span className="hood__map__list__no">02</span>
                  <span className="hood__map__list__name">
                    Blue Pants<span></span>
                  </span>
                </li>
                <li id="attributes_3" data-category="attributes">
                  <span className="hood__map__list__no">03</span>
                  <span className="hood__map__list__name">
                    Yellow Shoes<span></span>
                  </span>
                </li>
              </ol>
              <ol className=" js-hoodMapList">
                <li id="attributes_1" data-category="attributes">
                  <span className="hood__map__list__no">01</span>
                  <span className="hood__map__list__name">
                    White Shirt<span></span>
                  </span>
                </li>
                <li id="attributes_2" data-category="attributes">
                  <span className="hood__map__list__no">02</span>
                  <span className="hood__map__list__name">
                    Blue Pants<span></span>
                  </span>
                </li>
                <li id="attributes_3" data-category="attributes">
                  <span className="hood__map__list__no">03</span>
                  <span className="hood__map__list__name">
                    Yellow Shoes<span></span>
                  </span>
                </li>
              </ol>
            </div>
            <div className="hood__map__wrap">
              <div className="hood__map__canvas js-map"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BuyPage.propTypes = {
};
