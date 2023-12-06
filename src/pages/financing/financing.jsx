import React from 'react';
import ContactFormat from '../../components/contectFormat/ContactFormat';
import financingImg from "../../assets/images/skyscrapers-sunset.jpg";
import ScrollToTop from '../../components/scollToTop/ScrollToTop';

function financing() {
  return (
    <div>
        <section id="content_form_showcase">
        <img src={financingImg} alt="" />
      </section>
      <ContactFormat>
        <div className="left">
          <p>Enterprise</p>
          <p>Projects & Project Finance</p>
          <p>
          ADVICE ON FINANCE RESTRUCTURING, PROJECT FINANCE, NEGOTIATING TERMS OF CONTRACTS AND TRAINING.
          </p>
        </div>
        <div className="right">
          <p>
          We regularly assist and serve regional, national and international contractors, sub-contractors and employers with dedication to developing a thorough understanding of their projects.
          </p>
          <p>
          Our team of lawyers use their extensive skills and practical experience in construction, infrastructure projects and project finance to the benefit of our clients at every stage from inception through project completion.
          </p>
          <p>
          We have valuable experience with, and broad knowledge of the FIDIC standard contracts for construction and infrastructure projects which we utilize in advising our clients.
          </p>
          <p>
          We understand project finance and securities. On behalf of our clients we become involved in the pre-completion, completion and post-completion stages of negotiation, due-diligence and financing. We ensure that the client fulfils all the conditions precedent to enable smooth execution of the contracts.
          </p>
          <p>
          We have played pivotal roles in representing and negotiating terms of contracts and project financing in sectors such as Infrastructure, Energy & Natural Resources and Trade & Commodities.
          </p>
        </div>
      </ContactFormat>
      <ScrollToTop />
</div>
  )
}

export default financing