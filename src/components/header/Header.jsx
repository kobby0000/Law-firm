import React, { useState} from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";
import navLogo from "../../assets/images/logo_blue.png";

function Header() {
  const [toggle, setToggle] = useState(false);


  return (
    <div>
      <nav id="header">
        <div className="header_wrapper container">
          <div 
          onClick={() => setToggle(false)} 
          className="left"
          >
            <Link to="/">
              <img className="header_logo" src={navLogo} alt="header logo" />
            </Link>
          </div>
          <div className="right">
            <ul className={toggle ? "nav_main toggle" : "nav_main"}>
              <li 
              onClick={() => setToggle(!toggle)} 
              className="links"
              >
                <NavLink to="/">Home</NavLink>
              </li>
              <li onClick={() => setToggle(!toggle)}>
                <NavLink to="/the-firm">The Firm</NavLink>
              </li>
              {/* nxt */}
              <li className="dropdown">
                <span
                  className="drop_main"
                >
                  Expertise
                </span>
                <div className="content_parent" >
                  <ul className= "nav_sub enterprise">
                    <div className="left">

                    <li>
                      <Link to="/natural-resource" 
                      onClick={() => setToggle(!toggle)} 
                      >Natural Resource & Renewable Energy</Link>
                    </li>
                    <li>
                      <Link 
                      onClick={() => setToggle(!toggle)} 
                       to="/real-estate-constuction"
                       >Real Estate & Construction </Link>
                    </li>
                    <li>
                      <Link 
                      onClick={() => setToggle(!toggle)} 
                       to="/restructuring-insolvency"
                       >Restructuring & Insolvency</Link>
                    </li>
                    <li>
                      <Link 
                      onClick={() => setToggle(!toggle)} 
                       to="/project-financing"
                       >Project & Project Financing </Link>
                    </li>
                    </div>
                    <div className="right">
                    <li>
                      <Link to="/Mergers-Aquisition" onClick={() => setToggle(!toggle)} >Mergers & Acquisition</Link>
                    </li>
                    <li>
                      <Link 
                      onClick={() => setToggle(!toggle)} 
                       to="/dispute"
                       >Dispute Resolution & Debt Recovery </Link>
                    </li>
                    <li>
                      <Link 
                      onClick={() => setToggle(!toggle)} 
                       to="/corporate-aquisition"
                       >Corporate & Commercial</Link>
                    </li>
                   
                    </div>
                  </ul>
                </div>
              </li>
              <li className="dropdown">
                <span
                  className="drop_main"
                >
                  Knowledge & Insight
                </span>
                <div className="content_parent" >
                  <ul className= "nav_sub">
                    <li>
                      <Link to="/apprenticeship" onClick={() => setToggle(!toggle)} >Apprenticeship</Link>
                    </li>
                    <li>
                      <Link 
                      onClick={() => setToggle(!toggle)} 
                       to="/diversity-inclusion"
                       >Diversity Inclusion</Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* nxt */}
              <li className="dropdown">
              <NavLink
              to="/notary"
                  onClick={() => setToggle(!toggle)}
                  className="drop_main"
                >
                Business Support & Notary Services
                </NavLink>
              </li>
              {/* nxt */}
              <li className="dropdown">
                <NavLink
                to="/contact"
                onClick={() => setToggle(!toggle)}
                  className="drop_main"
                >
                  Contact us
                </NavLink>
               
              </li>
            </ul>
            
          </div>
          <div
            onClick={() => setToggle(!toggle)}
            className={toggle ? "humburger animate" : "humburger"}
          >
            <div className="burger_line"></div>
            <div className="burger_line"></div>
            <div className="burger_line"></div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
