import React from "react";
import Contact from "../../Components/GetinTouch/Contact";
import Brand from "../../Components/Brands/Brand";
import Meet from "../../Assets/newchanges3.webp";
import Analise from "../../Assets/Analise.png";
import Currency from "../../Assets/newchangesdowload.avif";
import SEO from "../../Components/SEO";


const Wantjoin = () => {
  return (
    <>

<SEO 
        title="Join Aievvo Engineers | Career & Job Opportunities in Interior Design & Fabrication"
        description="Join Aievvo Engineers Pvt. Ltd. and be part of a leading interior design and fabrication team. Explore job opportunities and build your career with us."
        keywords="Join Aievvo Engineers, Career Opportunities, Interior Design Jobs, Fabrication Jobs, Modular Furniture Jobs, Work with Us, Hiring, Job Openings, Interior Designers, Engineers Jobs"
      />

      
      <section>
        <div className="container-fluid">
          <div className="heroimg">
            <div className="overlay">
              <h2>WANT TO JOIN</h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="servicehead py-4">
              <h1>
                BE OUR <span> DESIGN EXPERT</span>
              </h1>
              <p>
                We at AIEVVO ENGINEERS provide services ranging from interior
                design, woodwork, furniture, home lighting, designer ceilings,
                wall painting and wallpaper and any type of civil works related
                to residential & commercial.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-4">
          <div className="row">
            <div className="col-md-6">
              <div className="workimg">
                <img src={Meet} alt="Meet" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="workimgtitle">
                <h1>MEET CLIENTS</h1>
                <p>
                  At the heart of every successful project is a strong
                  partnership with our clients. Meet Clients is more than just a
                  consultation—it's an opportunity for us to understand your
                  unique needs, preferences, and vision. We believe in open
                  communication, listening carefully to your ideas, and
                  providing expert advice to help shape your perfect space.
                  Building trust and understanding your goals is key to creating
                  designs that truly reflect who you are.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-4">
          <div className="row">
            <div className="col-md-6">
              <div className="workimgtitle1">
                <h1>PREPARE FINAL 3D DESIGN</h1>
                <p>
                  The Prepare Final 3D Design phase is where your vision comes
                  to life in stunning detail. Using advanced 3D modeling
                  software, we create a realistic, interactive representation of
                  your space, allowing you to experience the design before
                  construction even begins. This step helps ensure that every
                  element—color schemes, furniture placement, lighting, and
                  textures—aligns perfectly with your expectations. It’s your
                  chance to make any final tweaks before the work starts.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="workimg">
                <img src={Analise} alt="Analise" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-4">
          <div className="row">
            <div className="col-md-6">
              <div className="workimg">
                <img src={Currency} alt="Currency" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="workimgtitle">
                <h1>EARN ON EVERY PROJECT</h1>
                <p>
                  Become a part of our AIEVVO ENGINEERS family and start earning with
                  every project you contribute to. Whether you're a designer,
                  contractor, or skilled tradesperson, we offer exciting
                  opportunities to work on a variety of projects. With every
                  successful collaboration, you’ll earn competitive
                  compensation, while enhancing your portfolio with amazing
                  designs and builds.
                </p>
              </div>
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

export default Wantjoin;
