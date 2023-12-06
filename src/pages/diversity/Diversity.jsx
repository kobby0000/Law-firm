import React from "react";
import "./diversity.css";
// import ContactFormat from '../../components/contectFormat/ContactFormat';
import diversityImg from "../../assets/images/diverse-friends-students.jpg";
import ScrollToTop from "../../components/scollToTop/ScrollToTop";
import Collapsible from "../../components/collapsible/Collapsible";

function Diversity() {
  return (
    <div>
      <section id="diversity_showcase">
        <div className="diversity_showcase_wrapper">
          <p>Diversity & Inclusion</p>
        </div>
      </section>
      <section id="diversity_wrapper" className="diversity_container">
        <div className="left">
          <p>Enterprise</p>
          <p>Diversity, Equity and Inclusion at T&C Associates</p>
          <p>
            REPRESENTATION OF INDIVIDUALS, INSTITUTIONS AND CORPORATE
            ORGANISATIONS THROUGH QUALITY ADVOCACY AND DISPUTE RESOLUTION
            SERVICES.
          </p>
          <p>
            At T&C Associates, we don’t just understand that everyone is
            different, we know that these differences make us better lawyers and
            a stronger firm.
          </p>
          <p>
            Diversity, equity, and inclusion (DE&I) are central to our culture
            and strategy, and our Core Values underpin our inclusive approach to
            our clients, communities, and colleagues. We are committed to
            promoting an inclusive and equitable working environment that
            supports the growth and development of all our people. We also
            recognise the importance of improving access to the legal
            profession, and of investing in our local communities.
          </p>
          <p>
            We know that these issues are complex and that there is no easy fix.
            We are clear that meaningful progress requires real investment and
            tangible commitment from all levels within our firm, particularly
            from our senior leaders.
          </p>
          <p>
            We have a partner-led DE&I Strategy Group that oversees the
            development and delivery of the firm’s DE&I agenda. Our Strategy
            Group is chaired by Jean Boyle, Head of our Employment and
            Regulatory Team. We also have a DE&I Adviser, Rachel Feilden, who
            leads on the firm’s DE&I initiatives, and a specialist HR Data
            Analyst, Shelley Pattenden, who ensures we are able to utilise our
            data to inform strategy and monitor progress
          </p>
          <p>
            All of our people are given a DE&I induction, have ongoing access to
            DE&I training materials, and our senior staff have mandatory DE&I
            training targets and are asked to identify and meet a DE&I objective
            annually. The need for a demonstrable commitment to DE&I is also
            woven into each of our progression pathways.
          </p>
          <p>
            We partner with a number of organisations and are part of a variety
            of initiatives, all aiming to foster a true sense of belonging and
            inclusion. You can read more about some of the projects Stone King
            is involved in below.
          </p>
        </div>
        <div className="right">
          <img src={diversityImg} alt="" />
          <p className="head">Affiliations, Memberships and Projects</p>
          <Collapsible title="Disability Confident Employer">
            We are a Disability Confident employer, which is a government scheme
            designed to encourage and support employers in the recruitment and
            retention of disabled people and those with health conditions. As a
            Disability Confident employer, we are committed to actively
            attracting and recruiting disabled people, and to providing a fully
            inclusive and accessible recruitment process. Under the scheme, we
            offer interviews to disabled applicants who meet the criteria for
            the job. We are also committed to supporting our existing employees
            by promoting a culture of being Disability Confident, making sure
            our people know how to request support and adjustments, and ensuring
            managers know how they can support their team members who have
            disabilities or health conditions.
          </Collapsible>
          <Collapsible title="Race Fairness Commitment">
            We are signatories to the Race Fairness Commitment, which sets out a
            series of standards and detailed reporting requirements designed to
            promote racial equity. As part of the Commitment, we monitor
            interview rates, offer rates, promotion rates and stay gaps. We also
            conduct an annual ethnicity equal pay analysis and take various
            steps to support our junior ethnic minority talent.
          </Collapsible>
          <Collapsible title="Age-Friendly Employer Pledge">
            T&C Associates is one of the first signatories to the Age-Friendly
            Employer Pledge, an initiative of the Centre for Ageing Better,
            asking employers to recognise the importance and value of older
            workers. Alison Allen, the firm’s Chair and Head of our Private
            Client Sector, is our senior sponsor for age inclusion in our
            workforce. Under the Pledge, we have committed to creating an
            age-friendly culture, hiring age-positively, embracing flexible
            working, and ensuring health support is provided and career
            development encouraged across all ages.
          </Collapsible>
          <Collapsible title="Legal CORE">
            We are members of LegalCORE, the first leadership-led, cross-firm
            collective aimed at tackling the under representation of Black,
            Asian and minority ethnic groups across the legal industry in the
            UK. The collective acts as a convening body for law firms and
            provides a forum for the discovery of innovative solutions. It aims
            to work collaboratively with existing diversity- and
            inclusion-focused groups, networks, organisations and experts to
            enhance collective action and impact.
          </Collapsible>
          <Collapsible title="LeGal BesT">
            The firm is a member of LeGal BesT, a London-based network of law
            firms championing LGBTQ+ issues and providing support, education and
            social opportunities to staff. Member firms are committed to
            ensuring they provide a fair and inclusive working environment to
            all LGBTQ+ staff, and to sharing and promoting best practice. The
            network also offers social and networking opportunities, with past
            speakers including Lady Phyll, Peter Tatchell, Lord Chris Smith,
            Evan Davis and Sir Derek Jacobi. The network is open to everyone,
            regardless of sexual orientation or gender identity, and all members
            of the firm are encouraged to get involved.
          </Collapsible>
          <Collapsible title="Halo Code">
            T&C Associates has adopted the Halo Code, the first code relating to
            Black hair. The Halo Code explicitly protects staff who come to work
            with natural hair and protective hairstyles associated with their
            racial, ethnic, and cultural identities. The Code is set out within
            the firm’s dress code and is part of our broader commitment to
            ensuring we provide our people with an inclusive and equitable
            workplace.
          </Collapsible>
          <Collapsible title="Mental Health First Aiders">
            We recognise the critical importance of wellbeing and mental health
            and have a partner-led Wellbeing Strategy Group chaired by Tom
            Morrison, our Head of Further Education. We have 19 members of staff
            who are trained as Mental Health First Aiders (MHFA). Our MHFAs have
            received training in both the practical skills to spot the triggers
            and signs of mental health issues, and how to offer reassurance and
            support to anyone experiencing distress. They are also able to
            signpost colleagues to further external support.
          </Collapsible>
          <Collapsible title="Mindful Business Charter">
            We are signatories of the Mindful Business Charter, a practical
            framework that encourages thoughtfulness about the impact we have on
            each other at work. The Charter is made up of four ‘pillars’:
            openness and respect; smart meetings and communications; respecting
            rest periods; mindful delegation. It aims to facilitate open and
            honest conversations with others by providing a common language and
            setting out best practice behavioural principles to tackle and
            reduce avoidable stress in the workplace.
          </Collapsible>
        </div>
      </section>
      <ScrollToTop />
    </div>
  );
}

export default Diversity;
