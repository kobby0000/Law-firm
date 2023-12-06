import { useEffect } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/navigation";

// images
import slideImage2 from "../../assets/images/positive-woman-showing-tablet-screen-business-people.jpg";

import corporate from "../../assets/images/corporate.jpg";
import dispute from "../../assets/images/dispute.jpg";
import insolvency from "../../assets/images/insolvency.jpg";
import diversity from "../../assets/images/diversity.jpg";
import financing from "../../assets/images/financing.jpg";
import construction from "../../assets/images/construction.jpg";
import business from "../../assets/images/home-image-Conference.jpg";
import naturalImg from "../../assets/images/natural.jpg";
import mergers from "../../assets/images/mergers.jpg";

import ScrollToTop from "../../components/scollToTop/ScrollToTop";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section id="home">
        <div className="home_showcase_wrapper">
          <div className="home_swiper_background">
            <div className="swiper">
              <div className="left">
                <p
                data-aos="fade-up"
                data-aos-easing="ease-in"
                data-aos-duration="800"
                >Welcome Family</p>
                <p 
                data-aos="fade-up"
                data-aos-easing="ease-in"
                data-aos-duration="1000"
                className="text">
                  "To T&C Associates where justice meets excellence. Our
                  dedicated team is here to champion your legal needs." Thank
                  you!
                </p>
                <Link 
                data-aos="fade-up"
                data-aos-easing="ease-in"
                data-aos-duration="1200"
                className="btn_main" to="/the-firm">
                  Learn more
                </Link>
              </div>
              <div
              data-aos="zoom-in"
              data-aos-easing="ease-in"
              data-aos-duration="600"
              >
                <div className="blue_overlay"></div>
                <img src={slideImage2} alt="side_image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION : HOME_HELP */}
      <section id="home_help">
        <div className="home_help_wrapper container">
          <div className="top text_center">
            <p className="head text_center">
              At T & C ASSOCIATES we provide responsive, innovative services of
              the highest quality to our clients..
            </p>
            <p>
              We can help <div className="line"></div>
            </p>
            <p>
              Our work spans across sectors such as oil & gas, mining, real
              estate and infrastructure, education, healthcare, hospitality,
              aviation telecommunications, agriculture, social development and
              transportation..
            </p>
          </div>

          <div className="bottom">
            <div
              data-aos="fade-up"
              data-aos-easing="ease-in"
              data-aos-duration="700"
              className="card"
            >
              <img src={naturalImg} alt="" />
              <div className="text">
                <p>Natural Resource & Renewable Energy</p>
                <p>
                  full-range contracting and negotiations, mining, health and
                  safety matters.
                </p>
                <a className="btn_2 text_center" href="/annual-report">
                  Learn More
                </a>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="ease-in"
              data-aos-duration="900"
              className="card"
            >
              <img src={mergers} alt="" />
              <div className="text">
                <p>Mergers & Acquisition</p>
                <p>
                  With recent market trends and economic conditions, businesses
                  need to be innovative and remain profitable.
                </p>
                <a className="btn_2 text_center" href="/paypal-scam">
                  Learn More
                </a>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="ease-in"
              data-aos-duration="1100"
              className="card"
            >
              <img src={financing} alt="project financing" />
              <div className="text">
                <p>Project & Project Financing</p>
                <p>We understand project finance and securities.</p>
                <a className="btn_2 text_center" href="/about">
                  Learn More
                </a>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="ease-in"
              data-aos-duration="1100"
              className="card"
            >
              <img src={diversity} alt="diversity inclusion" />
              <div className="text">
                <p>Diversity Inclusion</p>
                <p>See our 2022 annual report and our Anniversary.</p>
                <a className="btn_2 text_center" href="/about">
                  Learn More
                </a>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="ease-in"
              data-aos-duration="1100"
              className="card"
            >
              <img src={construction} alt="Real Estate & Construction" />
              <div className="text">
                <p>Real Estate & Construction</p>
                <p>
                  We regularly assist national and international contractors
                </p>
                <a className="btn_2 text_center" href="/about">
                  Learn More
                </a>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="ease-in"
              data-aos-duration="1100"
              className="card"
            >
              <img src={corporate} alt="" />
              <div className="text">
                <p>Corporate & Commercial</p>
                <p>
                  Resolving cretical needs of emerging and established
                  companies.{" "}
                </p>
                <a className="btn_2 text_center" href="/about">
                  Learn More
                </a>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="ease-in"
              data-aos-duration="1100"
              className="card"
            >
              <img src={dispute} alt="" />
              <div className="text">
                <p>Dispute Resolution & Debt Recovery </p>
                <p>Our experienced litigators represent every client.</p>
                <a className="btn_2 text_center" href="/about">
                  Learn More
                </a>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="ease-in"
              data-aos-duration="1100"
              className="card"
            >
              <img src={insolvency} alt="" />
              <div className="text">
                <p>Restructuring & Insolvency</p>
                <p>
                  Risk management and insolvency and business restructuring.
                </p>
                <a className="btn_2 text_center" href="/about">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= SECTION:BUSINESS ======= */}
      <section id="business">
        <div className="business_wrapper">
          <div className="left">
            <img src={business} alt="Business Support & Notary Services" />
          </div>
          <div className="right">
            <p>Business Support & Notary Services.</p>
            <p>
              ADVISORY SERVICES AND COMPLIANCE, COMPANY SECRETARIAL SERVICES,
              REGISTRATIONS AND SETTING UP OF BUSINESS OPERATIONS
            </p>
            <p>
              T&C ASSOCIATES provides Business Support Services to various
              commercial enterprises drawn from all of the major sectors of the
              economy. We assist our clients with the formation and
              establishment of companies in Ghana, registration and application
              for licenses, permits from key regulatory bodies and undertake
              other administration services to enable the efficient running of
              client operations.
            </p>
            <p>
              Our ancillary services include Nominee Directorship, Compliance
              Audit and Training, Bank Account opening and Registered Business
              Address.
            </p>
            <a className="btn_main" href="/about">READ MORE</a>
          </div>
        </div>
      </section>

      {/* =======HOME_CONTACT======= */}
      <section id="home_contact">
        <div className="home_contact_wrapper">
          <p>Please contact our team for more information!</p>
          <a href="/contact" className="btn_main">Get In Touch</a>
        </div>
      </section>
      <ScrollToTop />
    </div>
  );
}

export default Home;
