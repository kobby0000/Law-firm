import React from "react";
import ContactFormat from "../../components/contectFormat/ContactFormat";
import insolvencyImg from "../../assets/images/loan.jpg";
import ScrollToTop from "../../components/scollToTop/ScrollToTop";

function Insolvency() {
  return (
    <div>
      <section id="content_form_showcase">
        <img src={insolvencyImg} alt="" />
      </section>
      <ContactFormat>
        <div className="left">
          <p>Enterprise</p>
          <p>Restructuring and Insolvency</p>
          <p>
            ADVICE ON RESTRUCTURING FOR NEW GROWTH AND DEVELOPMENT WHILE
            MINIMIZING POSSIBLE RISKS AND CHALLENGES IN THE PROCESS.
          </p>
        </div>
        <div className="right">
          <p>
            T & C Associates provides practical and succinct advice on the
            evolving nature of international and local markets. Our
            practitioners are versatile and well-versed in matters of
            international finance and risk management, insolvency and business
            restructuring.
          </p>
          <p>
            Over the years, our clients have trusted us to advice on
            restructuring for new growth and development, minimizing possible
            risks and challenges in the process.
          </p>
          <p>
            In line with this, we provide legal advice on structuring and
            documentation such as transactional due-diligence, regulatory
            structuring and compliance, securitization, transactional loan
            agreements, debt restructuring and scheduling.
          </p>
          <p>
            The Firm’s Managing Partner is a licensed Insolvency Practitioner
            certified to represent viable but distressed companies pursuant to
            the New Corporate Insolvency and Restructuring.
          </p>
        </div>
      </ContactFormat>
      <ScrollToTop />
    </div>
  );
}

export default Insolvency;
