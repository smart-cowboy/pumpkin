import React from 'react';

export default class LegalPage extends React.PureComponent {

  render() {
    return (
      <div className="page building js-scroll" data-view="building">
        <div className="building__gallery building__gallery--right">
          <div className="gallery">
            <div className="arrow gallery__arrow js-galleryArrow">
              <svg viewBox="0 0 30 30">
                <use
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xlinkHref="#icon-arrow-down"
                />
              </svg>
            </div>
            <ul className="gallery__nav">
              <li className="gallery__nav__dot js-galleryDot">
                <i>Image 1</i>
              </li>
              <li className="gallery__nav__dot js-galleryDot">
                <i>Image 2</i>
              </li>
              <li className="gallery__nav__dot js-galleryDot">
                <i>Image 3</i>
              </li>
            </ul>
            <div className="gallery__images js-gallery">
              <div className="gallery__image js-galleryImage gallery__image--scale">
                <img
                  src="public/fit3.jpg"
                  srcSet="public/fit3.jpg 1000w, public/fit3.jpg 2000w"
                  alt
                />
              </div>
              <div className="gallery__image js-galleryImage ">
                <div
                  className="image"
                  style={{
                    paddingTop: "111.11111111111%"
                  }}
                >
                  <img
                    src="public/fit4.jpg"
                    srcSet="public/fit4.jpg 1000w, public/fit4.jpg 2000w"
                    alt
                  />
                </div>
              </div>
              <div className="gallery__image js-galleryImage">
                <div
                  className="image"
                  style={{
                    paddingTop: "111.28775834658%"
                  }}
                >
                  <img
                    src="public/fit5.jpg"
                    srcSet="public/fit5.jpg 1000w, public/fit5.jpg 2000w"
                    alt
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="building__content building__content--left">
          <div className="building__logo building__logo--left">
            <img
              className="is-loading"
              alt="PunkBodies"
              src="public/logo2.png"
              width={109}
              height={34}
            />
          </div>
          <div className="building__sections js-scroll">
            <div className="building__section">
              <h2 className="heading--2">Overview</h2>
              <ul className="building__floors">
                <li>
                  <a href>Etherscan</a>
                </li>
                <li>
                  <a href>License</a>
                </li>
                <li>
                  <a href>Terms & Conditions</a>
                </li>
                <li>
                  <a href>Privacy Policy</a>
                </li>
              </ul>
              <div className="building__caption">select to download</div>
              <h3 className="heading--2">Licensing</h3>
              <div className="arrow arrow--building js-arrow">
                <svg
                  width={24}
                  height={24}
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 8l-5.247 6.44-5.263-6.44-.737.678 6 7.322 6-7.335-.753-.665z" />
                </svg>
              </div>
            </div>
            <div className="building__section">
              <div className="building__features">
                <h3 className="heading--3">STRUCTURE</h3>
                <p className="paragraph">
                  This is the first condition blah blah.
                    </p>
                <h3 className="heading--3">TERMS</h3>
                <p className="paragraph">
                  BLah blah blah blah
                  <br />
                  BVLah ahfhd
                </p>
                <h3 className="heading--3">NOTES</h3>
                <p className="paragraph">dfsdfdfasd blah blah</p>
              </div>
              <div className="building__caption">Back to Top</div>
              <div className="arrow arrow--back arrow--dark js-arrowBack">
                <svg
                  width={24}
                  height={24}
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 8l-5.247 6.44-5.263-6.44-.737.678 6 7.322 6-7.335-.753-.665z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LegalPage.propTypes = {
};
