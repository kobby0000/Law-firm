import React from 'react';
import ContactFormat from '../../components/contectFormat/ContactFormat';
import corporateImg from "../../assets/images/annual-report.jpg";
import ScrollToTop from '../../components/scollToTop/ScrollToTop';

function Corporate() {
  return (
    <div>
        <section id="content_form_showcase">
        <img src={corporateImg} alt="" />
      </section>
      <ContactFormat>
        <div className="left">
          <p>Enterprise</p>
          <p>Corporate & Commercial</p>
          <p>
          RESOLVING CRITICAL NEEDS OF EMERGING AND ESTABLISHED COMPANIES IN A CONTINUALLY CHANGING MARKETPLACE.
          </p>
        </div>
        <div className="right">
          <p>
          We regularly work with domestic and international clients on business formation and financing as well as myriad corporate transactions, contracts, securities, joint ventures and shareholding agreements, corporate governance and company secretarial services.
          </p>
          <p>
          We have a collaborative relationship with other practice areas in the firm, allowing us to resolve the critical needs of emerging and established companies in a continually changing marketplace.
          </p>
        </div>
      </ContactFormat>
      <ScrollToTop />
    </div>
  )
}

export default Corporate