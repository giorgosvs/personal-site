import React from "react";
import { Card } from "./Card";
import trex from "./assets/trex.jpg";

export const ContactSection = () => {
  return (
    <Card
      image={trex}
      content={
        <>
            <div className="contact-info">
              <h2>Contact Info</h2>
              <div>
                <h4>Email</h4>
                <p>
                  <a href="mailto:giorgos.n.vasilakis@gmail.com">
                    giorgos.n.vasilakis@gmail.com
                  </a>
                </p>
              </div>
              <div>
                <h4>Phone Number</h4>
                <p>+30 6982763949 (WhatsUp | Viber)</p>
              </div>
              <div>
                <h4>LinkedIn</h4>
                <p>
                  <a
                    href="https://www.linkedin.com/in/giorgosvs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/giorgosvs
                  </a>
                </p>
              </div>
              <div>
                <h4>Location</h4>
                <p>Barcelona, Spain (open to remote)</p>
              </div>
            </div>
        </>
      }
    />
  );
};
