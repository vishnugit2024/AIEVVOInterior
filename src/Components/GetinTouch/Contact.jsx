import React, { useState } from "react";
import Swal from "sweetalert2";
import "./Contact.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "59c00b99-ef75-437d-b694-9197a67db117");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Your message has been sent successfully.",
      });
      event.target.reset();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again.",
      });
    }
  };

  return (
    <>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row">
            <div className="contacttitle py-4">
              <h3>CONTACT US</h3>
              <p>Any question or remarks? Just write us a message!</p>
            </div>

            <div className="col-md-6 imgsection">
              <div className="bgblack">
                <div className="imagedata pt-3">
                  <h2>Contact Information</h2>
                  <p>Say something to start a live chat!</p>
                </div>
                <div className="imgcontactdetail py-5">
                  <div className="phonedetail py-4">
                    <FaPhoneAlt />
                    <a
                      target="_blank"
                      href="tel:+919412124892"
                      aria-label="Phone"
                    >
                      +91 9412124892 , 9761336602
                    </a>
                  </div>
                  <div className="maildetail py-4">
                    <FaEnvelope />
                    <a
                      target="_blank"
                      href="mailto:anil.kapoor@aievvo.com"
                      aria-label="mail"
                    >
                      anil.kapoor@aievvo.com
                    </a>
                  </div>
                  <div className="locationdetail py-4">
                    <FaLocationArrow />
                    <a target="_blank" href="#" aria-label="location">
                      PLOT NO-270/271 AASRAM ROAD BHANGEL NOIDA, GAUTAM BUDDHA
                      NAGAR-201301
                    </a>
                  </div>
                </div>
                <div className="imageIcon pb-4">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/profile.php?id=61574116371522"
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/aievvo?igsh=MTEycW5nczRjMzY3dw=="
                    aria-label="Facebook"
                  >
                    <FaInstagram />
                  </a>
                  <a target="_blank" href="#" aria-label="Youtube">
                    <FaYoutube />
                  </a>
                </div>
                {/* <div className="circleimg">
                  <img src={HalfCircle} alt="" />
                </div> */}
              </div>
            </div>

            {/* Form */}

            <div className="col-md-6">
              <form className="contact-form" onSubmit={onSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control custom-input"
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control custom-input"
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control custom-input"
                      id="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <div className="form-group">
                    <input
                      type="tel"
                      className="form-control custom-input"
                      id="phone"
                      name="phone"
                      placeholder="Phone Number"
                      maxLength="10"
                      pattern="[0-9]{10}"
                      title="Phone number must be 10 digits."
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">
                    Select Subject
                  </label>
                  <select
                    className="form-control custom-select"
                    id="subject"
                    name="subject"
                    required
                  >
                    <option value="">Choose an option</option>
                    <option value="general">General Enquiry</option>
                    <option value="furniture">Modular Furniture</option>
                    <option value="interior">Interior Designing</option>
                    <option value="fabrication">Fabrication Works</option>
                  </select>
                </div>

                <div className="mb-3">
                  <div className="form-group">
                    <textarea
                      className="form-control custom-input"
                      id="message"
                      rows="4"
                      name="message"
                      placeholder="Write your message..."
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn-primary custom-btn">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
