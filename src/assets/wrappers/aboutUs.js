import styled from 'styled-components';

const AboutUsStyles = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--backgroundColor); /* Ensure this variable is defined properly */
  text-align: center;
  
  .logo-container {
    width: 90px; /* Adjust the size for circular container */
    height: 90px; /* Ensure height matches the width for a circle */
    border-radius: 50%; /* Make the container circular */
    overflow: hidden; /* Hide overflow to ensure the SVG fits the circle */
    display: flex;
    align-items: center; /* Center the SVG vertically */
    justify-content: center; /* Center the SVG horizontally */
    margin: 20px auto; /* Center the logo with margin */
    box-shadow: var(--shadow-1); /* Optional: add shadow to the container */
  }

  .logo {
    width: 200% /* Scale the SVG to fill the container */
    height: 200%; /* Ensure the SVG height matches the container height */
    object-fit: cover; /* Cover the container, maintaining aspect ratio */
  }

  .content {
    padding: 20px;
    font-family: var(--bodyFont);
    background-color: var(--darkBackground); /* Ensure this variable is defined properly */
    color: var(--textColor);
  }

  h1 {
    margin-bottom: 20px;
  }

  .team-members {
    display: flex;
    justify-content: center;
    margin-bottom: 20px; /* Reduced margin at the bottom */
    flex-wrap: wrap;
    gap: 35px; /* Slight gap between images */
  }

  .member {
    text-align: center;
    margin: 5px; /* Added a small margin to separate the items */
  }

  img {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 8px; /* Slightly smaller margin below images */
    box-shadow: var(--shadow-2);
  }

  .quote {
    margin: 25px auto;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    width: fit-content;
    color: var(--primary-700);
  }

  .contact-info {
    margin: 15px auto;
    padding: 20px;
    border-top: 2px solid var(--grey-200);
    text-align: center;
    width: fit-content;
    box-shadow: var(--shadow-1);
    border-radius: var(--borderRadius);
  }

  h2 {
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0;
  }

  @media (max-width: 1024px) {
    .team-members {
      gap: 8px; /* Further reduced gap on tablets */
    }

    img {
      width: 120px;
      height: 120px;
    }

    .quote {
      font-size: 16px;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
      margin-bottom: 15px;
    }

    .team-members {
      flex-direction: column;
      gap: 8px;
    }

    .contact-info {
      width: 90%;
      padding: 15px;
      border-top: none;
    }

    .quote {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.2rem;
      margin-bottom: 10px;
    }

    img {
      width: 100px;
      height: 100px;
    }

    .quote {
      font-size: 12px; 
    }
  }
`;

export default AboutUsStyles;
