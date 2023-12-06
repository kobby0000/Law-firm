import React from 'react';
import ContactFormat from '../../components/contectFormat/ContactFormat';
import mergersImg from "../../assets/images/mergers.jpg";
import ScrollToTop from '../../components/scollToTop/ScrollToTop';

function mergers() {
  return (
    <div>
        <section id="content_form_showcase">
        <img src={mergersImg} alt="" />
      </section>
      <ContactFormat>
        <div className="left">
          <p>Enterprise</p>
          <p>Mergers & Acquisition</p>
          <p>
          UNDERSTAND THE COMPLEXITY OF MERGERS & ACQUISITIONS PROVIDE WIDE RANGE LEGAL SERVICES IN THIS REGARD.
          </p>
        </div>
        <div className="right">
          <p>
          With recent market trends and economic conditions, businesses need to be innovative and remain profitable.
          </p>
          <p>
          Lawyers at B&P Associates are well-versed in the legalities of Mergers & Acquisitions (“M&A”). We have expertise in joint venture, supply chain, share purchase agreements, product lines and services structuring, technology transfers and market entry.
          </p>
          <p>
          In our M&A practice, we find innovative ways to deliver our legal services: on transactional agreements, negotiations, due diligence, tax advisory, risk mitigation and corporate governance.
          </p>
        </div>
      </ContactFormat>
      <ScrollToTop />
    </div>
  )
}

export default mergers