import styled from 'styled-components';

const StyledComponents = styled.div`
  background-color: var(--grey-400);
  padding: 50px 30px;
  text-align: center;
  width: 100%;
  border-top: 2px solid var(--grey-200);
  box-shadow: var(--shadow-1);
  border-radius: var(--borderRadius);
  margin-top: auto;

  .cta {
    margin-bottom: 30px;

    h2 {
      margin-bottom: 10px;
    }

    form {
      display: flex;
      justify-content: center;
      gap: 10px;
    }

    input {
      padding: 10px;
      border-radius: var(--borderRadius);
      border: none;
      width: 200px;
    }

    button {
      padding: 10px 20px;
      border-radius: var(--borderRadius);
      border: none;
      background-color: var(--primary-500);
      color: var(--white);
      cursor: pointer;
      transition: var(--transition);

      &:hover {
        background-color: var(--primary-700);
      }
    }
  }

  .contact-info {
    margin-bottom: 20px;

    h2 {
      margin-bottom: 10px;
    }

    p {
      margin: 5px 0;
    }

    .social-links {
      margin-top: 10px;

      a {
        margin: 0 10px;
        color: var(--primary-700);
        font-size: 24px;
        transition: color 0.3s ease;

        &:hover {
          color: var(--primary-800);
        }
      }
    }
  }

  .footer-links {
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px; /* Added gap between buttons */

    button {
      padding: 10px 20px;
      border-radius: var(--borderRadius);
      border: none;
      background-color: var(--primary-500);
      color: var(--white);
      cursor: pointer;
      font-size: 16px;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: var(--primary-700);
      }
    }
  }

  .legal-info {
    margin-top: 20px;
    font-size: 14px;
    color: var(--black);
  }
`;

export default StyledComponents;
