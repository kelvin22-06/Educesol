import React, { useState } from 'react';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Form Submitted!');
    console.log('Name:', formData.name);
    console.log('Email:', formData.email);
    console.log('Message:', formData.message);

    alert('Your message has been sent! (Check console for details)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63441.26993584614!2d3.2258866281052114!3d6.486501714987633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8972a0413043%3A0xd5bb5d1c0948ceb3!2sMetroBlue%20Tech%20Systems%20LTD!5e0!3m2!1sen!2sng!4v1756492964896!5m2!1sen!2sng"
          width="100%"
          height="320"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

      <div className="contact-content">
        <div className="contact-form-section">
          <h2 className="contact-title">Contact Form</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-column">
                <div className="form-group">
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name *"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email *"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>
              <div className="form-column">
                <div className="form-group">
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                  ></textarea>
                </div>
              </div>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>

        <div className="contact-details-section">
          <h2 className="contact-title">Contact Details</h2>
          <div className="contact-details">
            <div className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" className="contact-icon" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.102 1.101m-.757-4.898l-4 4a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.102 1.101" />
              </svg>
              <a href="https://www.facebook.com/share/1CThB8u5pJ/" className="contact-link">Facebook</a>
            </div>
            <div className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" className="contact-icon" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="https://www.linkedin.com/company/metroblue/" className="contact-link">LinkedIn</a>
            </div>
            <div className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" className="contact-icon" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span> +234 907 912 5273</span>
            </div>
            <div className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" className="contact-icon contact-icon-address" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span> MetroBlue Tech System Ltd <br />
322 Road, Opposite H-Close, <br /> Festac Town, Lagos, Nigeria.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;