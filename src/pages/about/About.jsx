import React, { useEffect } from "react";
import "./about.css";

// images
import courtImage from "../../assets/images/court.jpg";
import teamWorkIcon from "../../assets/images/friendship.png";
import shieldIcon from "../../assets/images/shield.png";
import trustIcon from "../../assets/images/trust.png";
import respectIcon from "../../assets/images/integration.png";
import teamTwo from "../../assets/images/team2.jpg";
import teamFour from "../../assets/images/team4.jpg";
import teamThree from "../../assets/images/team3.jpg";
import teamFive from "../../assets/images/team5.jpg";
import testimonialImage1 from "../../assets/images/good-deal-right-corner-confident-pleasant-friendly-looking-african-american-gorgeous-woman-with-afro-haircut-asking-check-out-visit-store-page-pointing-finger-left-smiling-looking-camera.jpg";
import testimonialImage2 from "../../assets/images/team.jpg";

import SquareCard from "../../components/squareCard/SquareCard";
import ScrollToTop from "../../components/scollToTop/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section id="about_showcase">
        <div className="about_showcase_wrapper container">
          <p
            data-aos="zoom-in"
            data-aos-easing="ease-in"
            data-aos-duration="600"
            className="about_head"
          >
            Our Firm
          </p>
          <p
            data-aos="zoom-in"
            data-aos-easing="ease-in"
            data-aos-duration="900"
          >
            “B&P distinguishes itself as a highly professional law firm. In my
            interactions with B&P it distinguished itself due to the clarity of
            its communication and speed of delivery; the lawyers exceeded our
            expectations. The team has a great depth of knowledge about the
            legal environment in Ghana and is capable of explaining this with
            great clarity and detail to clients.”{" "}
            <span>– Client Review – 2021 Legal 500 EMEA</span>
          </p>
        </div>
      </section>

      {/* ======= SECTION: ABOUT_HISTORY ======= */}
      <section id="about_history">
        <div className="about_history_wrapper container">
          <div className="left">
            <p
              className="history_head"
              data-aos="zoom-in"
              data-aos-easing="ease-in"
              data-aos-duration="900"
              data-aos-anchor-placement="top-bottom"
            >
              Welcome To Our Firm
            </p>
            <p
              data-aos="zoom-in"
              data-aos-easing="ease-in"
              data-aos-duration="900"
              data-aos-anchor-placement="top-bottom"
            >
              B & P ASSOCIATES keenly promotes the ease of doing business in
              Ghana and for this reason provides top-notch user-friendly legal
              advice to domestic and international investors. We take on the
              responsibility of providing our Clients with all forms of
              assistance to navigate the legal and regulatory landscape, as well
              as provide training and consultancy for international
              organisations on the Ghanaian investment scheme. The Team is
              well-experienced in assisting companies set up and run
              successfully in Ghana in respect of business formation and
              financing, operational matters, as well as myriad corporate
              transactions, contracts, securities, joint ventures and
              shareholding agreements, corporate governance and company
              secretarial services. In providing cutting-edge legal services,
              our lawyers diligently research, anticipate and mitigate any form
              of risks and problems that may arise. We find solutions to them –
              simple and complex alike.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-easing="ease-in"
            data-aos-duration="900"
            data-aos-anchor-placement="top-bottom"
            className="right"
          >
            <img src={courtImage} alt="history" />
          </div>
        </div>
      </section>

      {/* ======= SECTION: ABOUT_STATEMENT ======= */}
      <section id="about_statement">
        <div className="about_statement_wrapper container">
          <div className="top">
            <div className="card">
              <p className="heading">OUR VISION</p>
              <p>
              As a law firm, we envision becoming a trusted legal partner, recognized for our excellence in legal advocacy, innovative solutions, and unwavering commitment to the pursuit of justice. We strive to be a beacon of legal expertise and ethical practice.
              </p>
            </div>
            <div className="card">
              <p className="heading">OUR MISSION</p>
              <p>
              Our mission is to provide exceptional legal services with integrity, dedication, and a client-centric approach. We aim to uphold justice, protect our clients' rights, and contribute to a fair and equitable legal system.
              </p>
            </div>
          </div>
          <div className="bottom">
            <p className="heading">OUR CORE VALUES</p>
            <p>
            Our core values revolve around professionalism, ethics, and client satisfaction. We are committed to integrity, transparency, and diligence in all our legal endeavors. Respect for diversity, collaboration, and continuous learning are integral to our firm's culture.
            </p>
          </div>
        </div>
      </section>

      {/* ======= SECTION: ABOUT_SQUARE_CARDS ======= */}
      <section id="about_square_cards">
        <div className="about_square_cards_wrapper container">
          <div className="card_wrapper">
            <SquareCard
              title="Integrety"
              src={shieldIcon}
              alt="credit union business banking"
            />
          </div>

          <div className="card_wrapper">
            <SquareCard
              title="Trust"
              src={trustIcon}
              alt="credit union personal banking"
            />
          </div>

          <div className="card_wrapper">
            <SquareCard
              title="Respect"
              src={respectIcon}
              alt="credit union banking support or help"
            />
          </div>

          <div className="card_wrapper">
            <SquareCard
              title="Team Work"
              src={teamWorkIcon}
              alt="credit union bank complaint "
            />
          </div>
        </div>
      </section>

      {/* ======= SECTION: ABOUT_TEAM ======= */}
      <section id="about_team">
        <div className="about_team_wrapper container">
          <div className="top text_center">
            <p>
              MEET <span>OUR</span> TEAM
            </p>
            <p>Board Members and Senior Management</p>
          </div>
          <div className="bottom">
            <div className="card">
              <div className="image_container">
                <img src={teamTwo} alt="" />
                <div className="card_overlay"></div>
              </div>
              <div className="details">
                <p className="title">Dr Marygold Green</p>
                <p className="title_two">CEO</p>
                <p className="description">
                  Dr Green is an accountant with over 25 years’ of experience in
                  the Finance.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="image_container">
                <img src={teamThree} alt="" />
                <div className="card_overlay"></div>
              </div>
              <div className="details">
                <p className="title">Dr Gland Lawson</p>
                <p className="title_two">Board Member</p>
                <p className="description">
                  Dr Gland Lawson is an investment banker, an engineer and an
                  academic.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="image_container">
                <img src={teamFour} alt="" />
                <div className="card_overlay"></div>
              </div>
              <div className="details">
                <p className="title">Mrs Lena Weber</p>
                <p className="title_two">Board Member</p>
                <p className="description">
                  Mrs Lena Weber serves as our Head of People, Culture and
                  Communications.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="image_container">
                <img src={teamFive} alt="" />
                <div className="card_overlay"></div>
              </div>
              <div className="details">
                <p className="title">Mrs Lena Weber</p>
                <p className="title_two">Board Member</p>
                <p className="description">
                  Mrs Lena Weber serves as our Head of People, Culture and
                  Communications.
                </p>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="card">
              <div className="image_container">
                <img src={teamTwo} alt="" />
                <div className="card_overlay"></div>
              </div>
              <div className="details">
                <p className="title">Dr Marygold Green</p>
                <p className="title_two">CEO</p>
                <p className="description">
                  Dr Green is an accountant with over 25 years’ of experience in
                  the Finance.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="image_container">
                <img src={teamThree} alt="" />
                <div className="card_overlay"></div>
              </div>
              <div className="details">
                <p className="title">Dr Gland Lawson</p>
                <p className="title_two">Board Member</p>
                <p className="description">
                  Dr Gland Lawson is an investment banker, an engineer and an
                  academic.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="image_container">
                <img src={teamFour} alt="" />
                <div className="card_overlay"></div>
              </div>
              <div className="details">
                <p className="title">Mrs Lena Weber</p>
                <p className="title_two">Board Member</p>
                <p className="description">
                  Mrs Lena Weber serves as our Head of People, Culture and
                  Communications.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="image_container">
                <img src={teamFive} alt="" />
                <div className="card_overlay"></div>
              </div>
              <div className="details">
                <p className="title">Mrs Lena Weber</p>
                <p className="title_two">Board Member</p>
                <p className="description">
                  Mrs Lena Weber serves as our Head of People, Culture and
                  Communications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= SECTION: TESTIMONIALS ======= */}
      <section id="testimonials">
        <div className="testimonials_wrapper container">
          <div className="top text_center">
            <p>Words from our customers.</p>
            <p>TESTIMONIALS</p>
            <div className="line"></div>
          </div>
          <div className="bottom">
            <div
              data-aos="zoom-in"
              data-aos-easing="ease-in"
              data-aos-duration="900"
              data-aos-anchor-placement="top-bottom"
              className="content"
            >
              <img src={testimonialImage1} alt="" />
              <div className="details">
                <p className="name">Michelle Anderson</p>
                <p className="message">
                "T&C Associates—legal excellence at its finest. Trusted advisors who navigate complexities with precision and expertise."
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-easing="ease-in"
              data-aos-duration="1100"
              data-aos-anchor-placement="top-bottom"
              className="content"
            >
              <img src={testimonialImage2} alt="" />
              <div className="details">
                <p className="name">James Bricks</p>
                <p className="message">
                "Exceptional service, T&C Associates exceeded expectations. Diligent, strategic, and highly recommended legal partners."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}

export default About;
