import React from 'react';
import diversityImg from "../../assets/images/diverse-friends-students.jpg";
import ScrollToTop from "../../components/scollToTop/ScrollToTop";

function Apprenticeship() {
  return (
    <div>
    <section id="diversity_showcase">
      <div className="diversity_showcase_wrapper">
        <p>Apprenticeship</p>
      </div>
    </section>
    <section id="diversity_wrapper" className="diversity_container">
      <div className="left">
        <p>Enterprise</p>
        <p>Apprentiship, Vacancies And Other Opprtunities At T & C Associates</p>
        <p>
          INDEPTH TRAINING, RESEARCH AND SKILL BUILDING BY THE ENTIRE FAMILY WITH HIGHER POSSIBILTY OF JOING OUR BEAUTIFUL FAMILY. 
        </p>
        <p>
        At T&C Associates, we believe Apprenticeships are a great opportunity to gain both a qualification and experience in the workplace, enabling you to implement the skills and knowledge learnt in real situations. This is why we offer a range of different apprenticeships around the Firm from Business Support to Legal Apprenticeships to help develop or start your career. 
        </p>
        <p>
        Any available vacancies in the future will be place on the right side of this page.
        </p>
        <p>
        Apprenticeship vacancies are not available on our page but youcan visit our <a href="/contact">Contact Us</a> page and send up and we will sure respond or pick up our office number and call for more information...Thank you!. 
        </p>
        <p>
        If you have any queries regarding apprenticeships, please do not hesitate to contact our Graduate Recruitment Team +452150125415.
        </p>
      </div>
      <div className="right">
        <img src={diversityImg} alt="" />
        <p className="head">APPRENTICESHIP VACANCIES</p>
      </div>
    </section>
    <ScrollToTop />
  </div>
  )
}

export default Apprenticeship