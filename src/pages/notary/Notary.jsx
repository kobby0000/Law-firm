import React from "react";
import "./notary.css";
import ContactFormat from "../../components/contectFormat/ContactFormat";
import notaryImg from "../../assets/images/mining.jpg";
import ScrollToTop from "../../components/scollToTop/ScrollToTop";

function Notary() {
  return (
    <div>
      <section id="content_form_showcase">
        <img src={notaryImg} alt="" />
      </section>
      <ContactFormat>
        <div className="left">
          <p>Enterprise</p>
          <p>Business Support and Notary Services.</p>
          <p>
            ADVISORY SERVICES AND COMPLIANCE, COMPANY SECRETARIAL SERVICES,
            REGISTRATIONS AND SETTING UP OF BUSINESS OPERATIONS.
          </p>
        </div>
        <div className="right">
          <p>
            The Firm provides Business Support Services to various commercial
            enterprises drawn from all of the major sectors of the economy. Our
            Team provides legal, tactical and strategic guidance.,
          </p>
          <p>
            We assist with the formation and establishment of companies in
            Ghana, obtain licenses, permits and administration services which
            are seamless to enable client’s function efficiently.
          </p>
          <p>
            We undertake land searches, land valuation and conduct conveyancing
            with respect to property and land purchase.
          </p>
          <p>
            We conduct and attend board meetings with respect to our company
            secretarial clients.
          </p>
          <p>
            We routinely offer investment advise on a consultative basis to
            prospective multi-national companies who wish to set up their
            business in Ghana.
          </p>
          <p>
            We conduct investigations, tracing and court searches in respect of
            legal proceedings and registration of securities.
          </p>
          <p className="heading">Notary Services</p>
          <p>
            The Firm is well-equipped to offer notary services. Our lawyers are
            authorised to authenticate and certify legal documents for overseas
            use. We provide a range of notary related legal services including
            but not limited to powers of attorney, deeds and estates, preparing
            and witnessing legal documents for use in foreign countries.
          </p>
          <p className="heading">Company Secretarial Services</p>
          <p>
            The Firm has a substantial number of Company Secretarial Clients.
          </p>
          <p>
            Our team of lawyers provide services in relation to due diligence,
            business registrations and set up, company secretarial and
            compliance to companies, joint ventures and partnerships. We ensure
            statutory reporting, regulatory compliance, record keeping, attend
            board meetings and advise on investments.
          </p>
          <p>
            Our company secretarial team provides business advisory services and
            ensures that our clients are always in compliance with corporate
            governance regulation codes.
          </p>
          <p className="heading">Labour & Payroll Audits.</p>
          <p>We provide all-encompassing and inventive labour advisory services, including payroll audits, welfare plan, preparation of employee handbook, negotiation, employment contract review and termination, outsourcing, pensions, health and safety compliance</p>

        </div>
      </ContactFormat>
      <ScrollToTop />
    </div>
  );
}

export default Notary;
