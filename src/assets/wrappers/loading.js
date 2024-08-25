import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 72px;
  height: 72px;
  
  .banter-loader {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 72px;
    height: 72px;
    margin-left: -36px;
    margin-top: -36px;
    display: flex;
    flex-wrap: wrap;
  }

  .banter-loader__box {
    position: relative;
    width: 20px;
    height: 20px;
    background: #00712D;
    border-radius: 7px;
    margin: 4px;
  }

  @keyframes moveBox-1 {
    0% { transform: translate(0, 0); }
    25% { transform: translate(26px, 0); }
    50% { transform: translate(26px, 26px); }
    75% { transform: translate(0, 26px); }
    100% { transform: translate(0, 0); }
  }

  .banter-loader__box:nth-child(1) {
    animation: moveBox-1 4s infinite;
  }

  @keyframes moveBox-2 {
    0% { transform: translate(0, 0); }
    25% { transform: translate(26px, 0); }
    50% { transform: translate(26px, 26px); }
    75% { transform: translate(0, 26px); }
    100% { transform: translate(0, 0); }
  }

  .banter-loader__box:nth-child(2) {
    animation: moveBox-2 4s infinite;
  }

  @keyframes moveBox-3 {
    0% { transform: translate(0, 0); }
    25% { transform: translate(-26px, 0); }
    50% { transform: translate(-26px, -26px); }
    75% { transform: translate(0, -26px); }
    100% { transform: translate(0, 0); }
  }

  .banter-loader__box:nth-child(3) {
    animation: moveBox-3 4s infinite;
  }

  @keyframes moveBox-4 {
    0% { transform: translate(0, 0); }
    25% { transform: translate(-26px, 0); }
    50% { transform: translate(-26px, -26px); }
    75% { transform: translate(0, -26px); }
    100% { transform: translate(0, 0); }
  }

  .banter-loader__box:nth-child(4) {
    animation: moveBox-4 4s infinite;
  }

  @keyframes moveBox-5 {
    0% { transform: translate(0, 0); }
    25% { transform: translate(26px, 0); }
    50% { transform: translate(26px, -26px); }
    75% { transform: translate(0, -26px); }
    100% { transform: translate(0, 0); }
  }

  .banter-loader__box:nth-child(5) {
    animation: moveBox-5 4s infinite;
  }

  @keyframes moveBox-6 {
    0% { transform: translate(0, 0); }
    25% { transform: translate(-26px, 0); }
    50% { transform: translate(-26px, 26px); }
    75% { transform: translate(0, 26px); }
    100% { transform: translate(0, 0); }
  }

  .banter-loader__box:nth-child(6) {
    animation: moveBox-6 4s infinite;
  }

  @keyframes moveBox-7 {
    0% { transform: translate(0, 0); }
    25% { transform: translate(26px, 0); }
    50% { transform: translate(26px, 26px); }
    75% { transform: translate(0, 26px); }
    100% { transform: translate(0, 0); }
  }

  .banter-loader__box:nth-child(7) {
    animation: moveBox-7 4s infinite;
  }

  @keyframes moveBox-8 {
    0% { transform: translate(0, 0); }
    25% { transform: translate(-26px, 26px); }
    50% { transform: translate(-26px, 26px); }
    75% { transform: translate(0, 26px); }
    100% { transform: translate(0, 0); }
  }

  .banter-loader__box:nth-child(8) {
    animation: moveBox-8 4s infinite;
  }

  @keyframes moveBox-9 {
    0% { transform: translate(0, 0); }
    25% { transform: translate(26px, 0); }
    50% { transform: translate(26px, 26px); }
    75% { transform: translate(0, 26px); }
    100% { transform: translate(0, 0); }
  }

  .banter-loader__box:nth-child(9) {
    animation: moveBox-9 4s infinite;
  }
`;

export default Wrapper;
