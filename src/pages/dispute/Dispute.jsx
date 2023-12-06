import React from 'react';
import ContactFormat from '../../components/contectFormat/ContactFormat';
import disputeImg from "../../assets/images/dispute.jpg";
import ScrollToTop from '../../components/scollToTop/ScrollToTop';

function Dispute() {
  return (
    <div>
        <section id="content_form_showcase">
        <img src={disputeImg} alt="" />
      </section>
      <ContactFormat>
        <div className="left">
          <p>Enterprise</p>
          <p>Dispute Resolution & Debt Recovery</p>
          <p>
          REPRESENTATION OF INDIVIDUALS, INSTITUTIONS AND CORPORATE ORGANISATIONS THROUGH QUALITY ADVOCACY AND DISPUTE RESOLUTION SERVICES.
          </p>
        </div>
        <div className="right">
          <p>
          At T & C ASSOCIATES, we have a team of skilled and experienced litigation & alternative dispute resolution lawyers.
          </p>
          <p>
          Our experienced litigators represent individuals, institutions and corporate organisations through quality advocacy and dispute resolution services.
          </p>
          <p>
          We effectively bring diverse cases to resolution through the Courts or alternative dispute resolution with minimum expenditure of time and resources to our clients.
          </p>
          <p>
          We also represent and assist clients with debt recovery matters and enforcement of judgments.
          </p>
        </div>
      </ContactFormat>
      <ScrollToTop />
    </div>
  )
}

export default Dispute