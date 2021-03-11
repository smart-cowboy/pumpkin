/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import Footer from 'components/Footer';
import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    const { username, onSubmitForm } = this.props;
    if (username && username.trim().length > 0) {
      onSubmitForm();
    }
  }

  render() {
    const {
      loading, error, repos, username, onChangeUsername, onSubmitForm
    } = this.props;
    const reposListProps = {
      loading,
      error,
      repos
    };

    return (
      <div className="page home" data-view="home">
        <div className="home__sections js-scroll">
          <section
            className="home__section home__section--first js-homeMobile js-scroll"
            data-callback="homeSection"
          >
            <div className="home__section__content">
              <div className="home__section__half home__section__half--first">
                <picture>
                  <source
                    media="(min-width: 1280px)"
                    srcSet="public/zombie_body.jpg"
                  />
                  <source
                    media="(min-width: 700px)"
                    srcSet="public/zombie_body.jpg"
                  />
                  <img
                    src="public/zombie_body.jpg"
                    className="home__section__bg is-loading"
                    alt
                  />
                </picture>
                <div className="home__section__copy mobile-hidden">
                  <h1 className="heading--1">
                    THE PUNKBODIES ALGORITHMICALLY{" "}
                    <span className="mobile-hidden">
                      <br />
                    </span>{" "}
                    GENERATED 24x100 PIXEL ART IMAGES
                    <span className="mobile-hidden">
                      <br />
                    </span>{" "}
                    BUILT ON THE ETHEREUM BLOCKCHAIN
                    <span className="mobile-hidden">
                      <br />
                    </span>
                  </h1>
                </div>
                <a href="index.html" className="home__section__logo">
                  <img
                    className="is-loading"
                    src="public/logo.png"
                    width={300}
                    height={100}
                  />
                </a>
              </div>
              <div className="home__section__half home__section__half--second">
                <picture>
                  <source
                    media="(min-width: 1280px)"
                    srcSet="public/alien_body.jpg"
                  />
                  <source
                    media="(min-width: 700px)"
                    srcSet="public/alien_body.jpg"
                  />
                  <img
                    src="public/alien_body.jpg"
                    className="home__section__bg is-loading"
                    alt
                  />
                </picture>
                <div className="home__section__copy mobile-hidden">
                  <h1 className="heading--1">
                    THE PUNKBODIES ALGORITHMICALLY{" "}
                    <span className="mobile-hidden">
                      <br />
                    </span>{" "}
                    GENERATED 24x100 PIXEL ART IMAGES
                    <span className="mobile-hidden">
                      <br />
                    </span>{" "}
                    BUILT ON THE ETHEREUM BLOCKCHAIN
                    <span className="mobile-hidden">
                      <br />
                    </span>
                  </h1>
                </div>
                <a href="index.html" className="home__section__logo">
                  <img
                    className="is-loading"
                    src="public/logo.png"
                    width={300}
                    height={100}
                  />
                </a>
              </div>
              <div className="home__section__copy mobile-visible js-homeMobile">
                <div className="heading--1">
                  THE PUNKBODIES ALGORITHMICALLY{" "}
                  <span className="mobile-hidden">
                    <br />
                  </span>{" "}
                  GENERATED 24x100 PIXEL ART IMAGES
                  <span className="mobile-hidden">
                    <br />
                  </span>{" "}
                  BUILT ON THE ETHEREUM BLOCKCHAIN
                </div>
              </div>
            </div>
          </section>
          <section
            className="home__section home__section--next js-homeMobile js-scroll"
            data-callback="homeSection"
          >
            <div className="home__section__content">
              <div className="home__section__half home__section__half--second">
                <div className="home__section__copy">
                  <img src="public/logo.png" width={300} height={100} />
                  <p className="paragraph">
                    The Punkbodies are artist and algorithmically generated
                    24x100 pixel art images built on the Ethereum
                    blockchain.
                  </p>
                  <a className="button" href="faq.html">
                    LEARN MORE
                  </a>
                </div>
              </div>
              <div className="home__building-image home__section__half home__section__half--first">
                <picture>
                  <source
                    media="(min-width: 1280px)"
                    srcSet="public/fit1.jpg"
                  />
                  <source
                    media="(min-width: 700px)"
                    srcSet="public/fit1.jpg"
                  />
                  <img
                    src="public/fit1.jpg"
                    className="home__section__bg is-loading"
                    alt
                  />
                </picture>
              </div>
            </div>
          </section>
          <section
            className="home__section home__section--next js-homeMobile js-scroll"
            data-callback="homeSection"
          >
            <div className="home__section__content">
              <div className="home__section__half home__section__half--first">
                <div className="home__section__copy">
                  <img src="public/logo.png" width={300} height={100} />
                  <p className="paragraph">
                    The Punkbodies are artist and algorithmically generated
                    24x100 pixel art images built on the Ethereum
                    blockchain.
                  </p>
                  <a className="button" href="gallery.html">
                    VIEW GALLERY
                  </a>
                </div>
              </div>
              <div className="home__building-image home__section__half home__section__half--second">
                <picture>
                  <source
                    media="(min-width: 1280px)"
                    srcSet="public/fit2.jpg"
                  />
                  <source
                    media="(min-width: 700px)"
                    srcSet="public/fit2.jpg"
                  />
                  <img
                    src="public/fit2.jpg"
                    className="home__section__bg is-loading"
                    alt
                  />
                </picture>
              </div>
            </div>
          </section>
          <div className="arrow arrow--home js-arrow">
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
        <Footer />
      </div>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func
};
