import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import { ReactComponent as Logo } from '../assets/images/logo.svg'; // Import SVG as a React component
import Footer from '../components/footer'; // Import the Footer component
import StyledComponents from '../assets/wrappers/aboutUs'; // Import the styled component

const AboutUs = () => {
  return (
    <StyledComponents>
      <div className="logo-container">
        <Link to="/">
          <Logo className="logo" />
        </Link>
      </div>
      
      <h1>Meet Our Team!</h1>
      <div className="team-members">
        <div className="member">
          <img src='https://res.cloudinary.com/debjnxbys/image/upload/v1724343702/greenrise/ankeeta_nxxupj.jpg' alt="Ankita Acharya" />
          <p>Ankita Acharya</p>
        </div>
        <div className="member">
          <img src='https://res.cloudinary.com/debjnxbys/image/upload/v1724343709/greenrise/Prasansa_Maharjan_hakjei.jpg' alt="Prasansa Maharjan" />
          <p>Prasansa Maharjan</p>
        </div>
        <div className="member">
          <img src='https://res.cloudinary.com/debjnxbys/image/upload/v1724343717/greenrise/Sushant_Timalsina_onewz5.jpg' alt="Sushant Timalsina" />
          <p>Sushant Timalsina</p>
        </div>
        <div className="member">
          <img src='https://res.cloudinary.com/debjnxbys/image/upload/v1724343717/greenrise/Unique_Dhungana_ycgx1q.jpg' alt="Unique Dhungana" />
          <p>Unique Dhungana</p>
        </div>
      </div>
      
      <div className="quote">
        <p>प्रकृतिको पुकार , हाम्रो शक्ति,</p>
        <p>धर्तिको भविष्य, हाम्रो युवाको भक्ती ।</p>
      </div>
      
      <Footer />
    </StyledComponents>
  );
};

export default AboutUs;
