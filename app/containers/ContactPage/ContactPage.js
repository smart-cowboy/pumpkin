import React from 'react';

export default class ContactPage extends React.PureComponent {

  render() {
    return (
      <div className="page contact" data-view="contact">
        <div className="contact__left">
          <h1 className="heading--2">Social Media</h1>
          <h2 className="heading--3">Follow us</h2>
          <ul className="contact__details">
            <li>
              <a href>
                {" "}
                <em>Discord</em>
              </a>
              <br />
                  See whats happening in the community
                  <br />
            </li>
            <li>
              <a href>
                {" "}
                <em>Twitter</em>
              </a>
              <br />
                  Follow us for updates
                  <br />
            </li>
          </ul>
        </div>
        <div className="contact__right">
          <h1 className="heading--2">Contact</h1>
          <h2 className="heading--3">
            For questions, concerns, and inquirys
              </h2>
          <ul className="contact__details">
            <li>
              <em>General</em>
              <br />
              <a href="mailto:info@punkbodies.com">info@punkbodies.com</a>
              <br />
              <a href="tel:1234345234">123-324-2343</a>
            </li>
            <li>
              <em>PR</em>
              <br />
              <a href="mailto:info@punkbodies.com">info@punkbodies.com</a>
              <br />
              <a href="tel:1234345234">123-324-2343</a>
            </li>
            <li>
              <em>Concerns</em>
              <br />
              <a href="mailto:info@punkbodies.com">info@punkbodies.com</a>
              <br />
              <a href="tel:1234345234">123-324-2343</a>
            </li>
          </ul>
        </div>
        <div className="availability__center" />
      </div>
    );
  }
}

ContactPage.propTypes = {
};
