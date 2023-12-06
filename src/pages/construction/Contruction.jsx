import React from 'react';
import "./contruction.css";
import ContactFormat from '../../components/contectFormat/ContactFormat';
import constructionImg from "../../assets/images/civil-engineer-construction-worker.jpg"
import ScrollToTop from '../../components/scollToTop/ScrollToTop';

function Contruction() {
  return (
    <div>
        <section id="content_form_showcase">
        <img src={constructionImg} alt="" />
      </section>
      <ContactFormat>
        <div className="left">
          <p>Enterprise</p>
          <p>Natural Resources & Renewable Energy
</p>
          <p>
          ADVISE, SUPPORT AND REPRESENTATION ON OIL AND GAS, POWER AND MINING PROJECTS INCLUDING RENEWABLE ENERGY.
          </p>
        </div>
        <div className="right">
          <p>
          We regularly assist and serve regional, national and international contractors, sub-contractors and employers with dedication to developing a thorough understanding of the construction processes and contracts. Our team of lawyers use their extensive skills and practical experience in construction and infrastructure projects to the benefit of our clients at every stage from inception through project completion.
          </p>
          <p>
          We have valuable experience with, and broad knowledge of the FIDIC standard contracts for construction and infrastructure projects which we utilize in advising our clients.

          </p>
          <p>
          We understand project finance and securities. On behalf of our clients we become involved in the pre-completion, completion and post-completion stages of negotiation, due-diligence and financing. We ensure that the client fulfils all the conditions precedent to enable smooth execution of the contracts.
          </p>
        </div>
      </ContactFormat>
      <ScrollToTop />
    </div>
  )
}

export default Contruction