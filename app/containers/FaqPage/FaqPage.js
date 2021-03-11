import React from 'react';

export default class FaqPage extends React.PureComponent {

  render() {
    return (
      <div
        className="page team js-scroll"
        data-callback="team"
        data-view="team"
      >
        <nav className="team__nav">
          <div className="team__nav__inner">
            <h1 className="heading--2">Frequently Asked Questions</h1>
            <ul className="team__nav__menu">
              <li>
                <a href="#1">Question</a>
              </li>
              <li>
                <a href="#2">Question</a>
              </li>
              <li>
                <a href="#3">Question</a>
              </li>
              <li>
                <a href="#4">Question</a>
              </li>
              <li>
                <a href="#5">Question</a>
              </li>
              <li>
                <a href="#6">Question</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="team__content">
          <section className="team__section">
            <div className="team__section__content">
              <h2 className="heading--2">WHO IS</h2>
              <p className="paragraph">Blah blah blah</p>
            </div>
          </section>
          <section className="team__section">
            <div className="team__section__content">
              <h2 className="heading--2">WHAT IS</h2>
              <p className="paragraph">Blah blah blah</p>
            </div>
          </section>
          <section className="team__section">
            <div className="team__section__content">
              <h2 className="heading--2">HOW ABOUT</h2>
              <p className="paragraph">
                Blah blah blah
                    <br />
              </p>
            </div>
          </section>
          <section className="team__section">
            <div className="team__section__content">
              <h2 className="heading--2">QUESTION?</h2>
              <p className="paragraph">Blah blah blah</p>
            </div>
          </section>
          <section className="team__section">
            <div className="team__section__content">
              <h2 className="heading--2">Question?</h2>
              <p className="paragraph">Blah blah blah</p>
            </div>
          </section>
          <section className="team__section">
            <div className="team__section__content">
              <h2 className="heading--2">QUESTION</h2>
              <p className="paragraph">Blah blah blah</p>
            </div>
          </section>
          <div className="arrow arrow--team js-teamArrow">
            <svg viewBox="0 0 30 30">
              <use
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xlinkHref="#icon-arrow-down"
              />
            </svg>
          </div>
        </div>
        <div className="team__arrows">
          <div className="building__back-to-top js-arrowBack">
            Back to Top
              </div>
        </div>
      </div>
    );
  }
}

FaqPage.propTypes = {
};
