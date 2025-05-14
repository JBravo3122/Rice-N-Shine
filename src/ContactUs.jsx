import React, { useState } from 'react';
import './css/ContactUs.css';
import "./css/Breadcrumbs.css";

const ContactUs = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [platform, setPlatform] = useState('gmail');

  const handleSubmit = (e) => {
    e.preventDefault();

    const toEmails = ['phoebecamistoso@su.edu.ph', 'anceliorozco@su.edu.ph', 'janminoferio@su.edu.ph'].join(',');
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(message);
    const encodedTo = encodeURIComponent(toEmails);

    let url = '';

    switch (platform) {
      case 'gmail':
        url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodedTo}&su=${encodedSubject}&body=${encodedBody}`;
        break;
      case 'outlook':
        url = `https://outlook.office.com/mail/deeplink/compose?to=${encodedTo}&subject=${encodedSubject}&body=${encodedBody}`;
        break;
      case 'yahoo':
        url = `https://compose.mail.yahoo.com/?to=${encodedTo}&subject=${encodedSubject}&body=${encodedBody}`;
        break;
      default:
        url = `mailto:${toEmails}?subject=${encodedSubject}&body=${encodedBody}`;
    }

    window.open(url, '_blank');
  };

  return (
    <>
      <div className="breadcrumbs-container">
            <div className="breadcrumbs">
              <p>
                <Link to="/" className="breadcrumbs-Link">
                  <img src={home} /> Home
                </Link>{" "}
                &gt; Contact Us
              </p>
            </div>
      </div>
      <div className="faq-title">
        <h1>Contact Us</h1>
        <hr />
        <p>
          <i>Want to share a recipe? Have more Questions? Send Us an Email!</i>
        </p>
      </div>

      <div className="contact-container">
        <form onSubmit={handleSubmit} className="contact-form">
    <div className="form-row">
      <label className="contact-label" htmlFor="platform">Choose Email Platform:</label>
      <select
        id="platform"
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
        className="contact-select"
      >
        <option value="gmail">Gmail</option>
        <option value="outlook">Outlook</option>
        <option value="yahoo">Yahoo Mail</option>
        <option value="default">Default Email App</option>
      </select>
    </div>

    <div className="form-row">
      <label className="contact-label" htmlFor="subject">Subject:</label>
      <input
        id="subject"
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
        className="contact-input"

      />
    </div>

    <div className="form-group">
      <label className="contact-label" htmlFor="message">Message:</label>
      <textarea
        id="message"
        value={message}
        placeholder="Message..."
        onChange={(e) => setMessage(e.target.value)}
        rows={5}
        required
        className="contact-textarea"
      />
    </div>

    <button type="submit" className="contact-button">SUBMIT</button>
  </form>

    </div>
    </>
  );
};

export default ContactUs;
