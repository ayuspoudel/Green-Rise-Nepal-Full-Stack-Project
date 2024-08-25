
import {Wrapper,SocialLinks} from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';


// Define the SocialLinks component with styled-components


const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h2>
            <span>Green</span>
            Rise
          </h2>
          <p>
          We are Green Youth Nepal, a group of young Nepalis united by our passion for improving waste segregation, particularly focusing on e-waste like old computers and mobile phones.
           Through our research, we discovered that valuable resources are often lost when e-waste ends up in landfills instead of being recycled. 
           We also learned that small changes, like better sorting of household waste, can have a significant impact. 
           To tackle these issues, we are working with local government officials to enhance waste management systems and educate the community. 
           By organizing workshops, we aim to teach safe e-waste disposal and effective recycling practices.
           <br/>
           Join us in our mission to create a cleaner, greener Nepal, where we can all make a real difference for the environment.
            </p>
          <Link to='/register' className='btn btn-hero'>
            know about us
          </Link><Link to='/aboutUs' className='btn btn-hero'>
            About us
          </Link>

          <SocialLinks>
            <a href='https://instagram.com' target='_blank' rel='noreferrer'>
              <FaInstagram />
            </a>
            <a href='https://linkedin.com' target='_blank' rel='noreferrer'>
              <FaLinkedin />
            </a>
            <a href='https://facebook.com' target='_blank' rel='noreferrer'>
              <FaFacebook />
            </a>
          </SocialLinks>
        </div>
        <img src='https://res.cloudinary.com/debjnxbys/image/upload/v1724343941/greenrise/main_hlsx2s.png' alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};


export default Landing;
