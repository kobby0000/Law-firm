import React from 'react';
import "./contactFormat.css";

function ContactFormat(props) {
  return (
    <div>
      <section id="content_form_main">
        <div className=" content_main_wrapper container">
        {props.children}
        </div>
      </section>
    </div>
  )
}

export default ContactFormat