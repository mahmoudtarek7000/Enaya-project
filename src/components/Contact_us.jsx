import React from "react";

function Contact_us() {
  return (
    <div className="contact-us p-5">
      <div className="container">
        <div className="row">
          <form className="form col-lg-7"  id="usrform">
            <h2 className="text-left">Contact Us</h2>
            <p>We will be happy to receive your inquiries and suggestions.</p>
            <div className="form-inputs">
              <label className="form-label">
                Your Name<span className="star">*</span>
              </label>
              <input
                className="form-input"
                type="text"
                name="firstNameAndLastName"
                placeholder="First name and Last name"
              />
            </div>
            <div className="form-inputs">
              <label className="form-label">
                Mobile Number<span className="star">*</span>
              </label>
              <input
                className="form-input"
                type="number"
                name="MobileNumber"
                placeholder="Mobile Number"
              />
            </div>
            <div className="form-inputs">
              <label className="form-label">
                Email Address<span className="star">*</span>
              </label>
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="example@domain.com"
              />
            </div>
            <div className="form-inputs">
              <label className="form-label">
                Message<span className="star">*</span>
              </label>
              <input
                type="text"
                className="form-input py-5"
                placeholder="Your Message"
              />
            </div>
            <button className="form-input-btn" type="submit">
              SEND
            </button>
          </form>
          <div className="col-lg-5 pl-5 call-us">
            <h2 className="text-left">Call Us</h2>
            <p>16676 Cost of regular call</p>
            <p>From outside Egypt call:</p>
            <p>+2 02 259 83 999</p>
            <h2 className="text-left">Address</h2>
            <p>22 Tahrir St. behind Train Station - Alexandria</p>
            <h2 className="text-left">Mail Us</h2>
            <p>customercare@enaya.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact_us;
