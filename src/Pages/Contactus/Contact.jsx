import React from "react";
import Contact from "../../Components/GetinTouch/Contact";
import Brand from "../../Components/Brands/Brand";
import SEO from "../../Components/SEO";

const ContactUS = () => {
  return (
    <>
      <SEO
        title="Contact Us | Aievvo Engineers Pvt. Ltd."
        description="Get in touch with Aievvo Engineers Pvt. Ltd. for professional interior design, modular furniture, and fabrication services. Contact us today!"
        keywords="Contact Aievvo Engineers, Interior Design Consultation, Get a Quote, Office Location, Call Us, Interior Experts, Home Decor Consultation"
      />

      <section>
        <div className="container-fluid">
          <div className="heroimg2">
            <div className="overlay2">
              <h2>CONTACT US</h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Contact />
      </section>
      <section>
        <Brand />
      </section>
    </>
  );
};

export default ContactUS;
