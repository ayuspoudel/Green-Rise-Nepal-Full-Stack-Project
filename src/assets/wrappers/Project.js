import styled from 'styled-components';

const Wrapper = styled.div`

  display: grid;

  p span {
    background: var(--primary-500);
    padding: 0.15rem 0.25rem;
    color: var(--white);
    border-radius: var(--borderRadius);
    letter-spacing: var(--letterSpacing);
  }

  .page {
    margin-top: 20px; /* Adjust this value based on your design needs */
  }
`;

export const ImageCarousel = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 2rem;

  img {
    width: 100%;
    border-radius: var(--borderRadius);
  }
`;

export const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  color: var(--white);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  z-index: 500; /* Reduce this value so it is lower than the navbar's z-index */
`;

export const ArrowLeft = styled(Arrow)`
  left: 10px;
`;

export const ArrowRight = styled(Arrow)`
  right: 10px;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

export const Card = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  background-color: #f2f2f2;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 0 5px #ffffff80;
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

export const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: 0;
  transform: translateY(100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 2; /* Ensure CardContent is above CardImage */

  ${Card}:hover & {
    opacity: 1;
    transform: translateY(0);
  }

  .card__title {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
  }

  .card__description {
    margin: 5px 0 0;
    font-size: 14px;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* Limit description to 3 lines */
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .card__read-more {
    margin-top: 10px;
    color: #ffeb3b;
    text-decoration: underline;
    font-size: 14px;
    cursor: pointer;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1; /* Ensure CardImage is below CardContent */
`;

export default Wrapper;
