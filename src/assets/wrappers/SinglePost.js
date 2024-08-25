import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const Card = styled.div`
  background: var(--white);
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow-2);
  width: 100%;
  max-width: var(--max-width);
  padding: 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  margin: 0;
  color: var(--black);
  font-size: 2rem;
  text-align: left;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const AuthorInfo = styled.p`
  color: var(--grey-600);
  font-size: 0.9rem;
  margin-top: 0.5rem;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: var(--borderRadius);
  margin-bottom: 1.5rem;
`;

export const Content = styled.div`
  line-height: 1.6;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  text-align: justify;
  width: 100%;
  max-width: 800px;
`;

export const Description = styled.p`
  color: var(--grey-700);
  font-family: 'Times New Roman', serif;
  text-justify: inter-word;
  line-height: 1.6;
  width: 100%;
`;

export const Section = styled.div`
  margin-bottom: 1.5rem;
  text-align: justify;
  width: 100%;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  text-align: left;
`;

export const SectionSubHeading = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-align: left;
`;

export const SectionDescription = styled.p`
  font-size: 1rem;
  text-align: justify;
`;

export const ReferenceLink = styled.div`
  margin-top: 20px;
  font-style: italic;
  width: 100%;
  text-align: justify;

  a {
    color: var(--primary-500);
    text-decoration: none;
    word-break: break-all;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Wrapper;
