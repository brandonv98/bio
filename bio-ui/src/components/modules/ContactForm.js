import React from 'react';
// import {Carousel} from 'react-bootstrap';
import FormCss from '../../Form.css';

// Import board contact components/
// import BoardContects from './modules/ContactPanel/BoardContact';
// Import board member content data.
// import BoardMemberContent from './dependencies/content/Contact';

const ContactForm = (props) => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
          <h2>Contact Us</h2>
        </div>
      </div>
      <div className="row shadow-box doc-file center">
        {/* <BoardContects contactData={BoardMemberContent} /> */}
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xs-offset-3 top-margin">
          <form
            id="contact-form"
            className="form"
            action="https://formspree.io/brandon@csdevs.io"
            method="POST"
            role="form">
            <div className="form-group">
              <label className="form-label" htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Your name"
                tabIndex={1}
                required/>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="customer_number">Customer Number</label>
              <input
                type="text"
                className="form-control"
                id="customer_number"
                name="customer_number"
                placeholder="Your Customer # (Opt)"
                tabIndex={2}/>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Your Email"
                tabIndex={3}
                required/>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="subject">Subject</label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                placeholder="Subject"
                tabIndex={3}/>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea
                rows={5}
                cols={50}
                name="message"
                className="form-control"
                id="message"
                placeholder="Message..."
                tabIndex={4}
                required
                defaultValue={""}/>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-start-order">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
