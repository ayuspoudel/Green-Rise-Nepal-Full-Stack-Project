import styled from 'styled-components';

const Wrapper = styled.main`

  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: 0; /* Adjust margin-top as needed */
  }
  .btn-hero {
    margin-right: 10px; /* Space between the buttons */
  }
  h2 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
    font-size: 0.95rem;
      text-align: justify; 
  }
  .main-img {
    display: none;
    width: 100%; /* Ensure image takes full width of its container */
    height: auto; /* Maintain aspect ratio */
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
      margin-top: 0; /* Ensure no extra margin on larger screens */
    }
    .main-img {
      display: block;
      width: 100%; /* Make the image full-width on large screens */
      height: auto; /* Maintain aspect ratio */
    }
  }
  @media (max-width: 768px) {
    .page {
      grid-template-columns: 1fr; /* Stack content vertically on smaller screens */
      margin-top: 0; /* Adjust margin-top for smaller screens */
    }
  }
`;

const SocialLinks = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1.5rem;

  a {
    color: var(--primary-400);
    font-size: 2rem;
    transition: color 0.3s;

    &:hover {
      color: var(--primary-800);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Stack social links vertically on smaller screens */
    gap: 1rem;
  }
`;

export { Wrapper, SocialLinks };
