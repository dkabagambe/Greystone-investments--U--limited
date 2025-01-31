import React from "react";
import "../styles/About.css";
import leftimage from "../img/machines2/IMG-20241127-WA0012.jpg";
import rightimage from "../img/machines2/IMG-20250107-WA0011.jpg";

const About = () => {
  return (
    <>
      {/* Company Overview Section */}
      <div className="section">
        {/* Left Image */}
        <div className="image-container left">
          <img src={leftimage} alt="Company Overview" className="about-image" />
        </div>

        {/* Content on the Right */}
        <div className="content-container">
          <h1 className="app-h1">Company Overview</h1>
          <h3>
            <span>Greystone Investments (U) Limited</span> proudly Ugandan
            Company incorporated in the year 2009.
          </h3>
          <p>
            Greystone is registered and approved by Petroleum Authority of
            Uganda to legally provide services and supply materials to the oil
            and gas sector (PAU NSD No: Ns- 13802/2022/2782).
          </p>
          <h4>
            Greystone objectives are to provide services in the following areas:
          </h4>
          <ul>
            <li>Project Management</li>
            <li>Engineering</li>
            <li>Construction Supervision</li>
            <li>Logistics and Professional Staffing</li>
            <li>
              Recruiting services to the developing oil, gas sector within
              Uganda and the East African region
            </li>
          </ul>
          <p>
            Greystone's staffing Licenses include; Trade License from Kampala
            City Council Authority COIN 0004902672 PRN 2230008362684. Ministry
            of Gender, Labour and Social Development License No: E22030002
          </p>
          <p>
            The company became functional and effective in construction work of
            Roads as Ishaka-Muhereza Workshop Ltd in 2009.
          </p>
          <p>
            It established the Managing Director as Mr. Julius Barohooza with
            the administration experience of over Eighteen years and having
            experienced Engineers and other Technical staff.
          </p>
          <p>
            The company is established and registered in accordance with the
            laws of Uganda.
          </p>
          <p>
            The favorable Investment Policy and the incentive packages
            encouraged Greystone Investment Ltd to commit its resources to
            operate the company thereby, contribute/participate in the overall
            economic development of the country.
          </p>
        </div>
      </div>

      {/* Mission Statement Section */}
      <div className="section reverse">
        {/* Right Image */}
        <div className="image-container right">
          <img
            src={rightimage}
            alt="Mission Statement"
            className="about-image"
          />
        </div>
        {/* Content on the Left */}
        <div className="content-container">
          <h4>Mission Statement</h4>
          <p>
            Greystone Investments Limited is dedicated to providing excellent
            construction services in Uganda and in the East African region. Our
            ability to succeed is based on a solid commitment to values of
            integrity and solidarity while ensuring quality, timely completion,
            and safety standards.
          </p>
          <h4>Vision</h4>
          <p>
            We aim to be amongst the top indigenous construction companies in
            Uganda and the East African Region within the next five years.
          </p>
          <h4>Mission</h4>
          <ul>
            <li>
              We are dedicated to providing high-standard services and products
              that are fit for purpose.
            </li>
            <li>
              We aim at satisfying our clients by providing the best value for
              money.
            </li>
            <li>
              We believe that our development is strongly related to the
              development of our human resources through training.
            </li>
            <li>
              We are dedicated to safety, quality, and preserving the
              environment.
            </li>
          </ul>
          <p>
            We promote an environment of competitiveness amongst our employees
            to promote their sense of leadership and teamwork.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
