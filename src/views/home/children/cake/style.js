import styled from 'styled-components'

const CakeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .cake {
    position: relative;
    transform: translateY(60%);
    img {
      width: 250px;
      height: 250px;
    }
    .fire {
      width: 160px;
      height: 163px;
      position: relative;
      left: 50px;
      bottom: 230px;
      .flame {
        width: 18px;
        height: 18px;
        background: #FFD678;
        position: absolute;
        z-index: 6;
        border-radius: 80% 0 55% 50%/55% 0 80% 50%;
        left: 50%;
        top: -20px;
        margin-left: -9px;
        -webkit-transform: rotateZ(-45deg);
        transform: rotateZ(-45deg);
        -webkit-animation: flameFlicker 0.9s ease infinite;
        animation: flameFlicker 0.9s ease infinite;
      }
      .flame .inner-flame {
          width: 10px;
          height: 10px;
          background: #D1835C;
          position: absolute;
          z-index: 8;
          border-radius: 80% 0 55% 50%/55% 0 80% 50%;
          left: 50%;
          margin-left: -7px;
          bottom: 2px;
          opacity: 0.4;
      }
      .outer-glow {
          width: 200px;
          height: 200px;
          background: #6E4247;
          position: absolute;
          border-radius: 100%;
          left: -20px;
          top: -120px;
          opacity: 0.2;
          -webkit-animation: glowFlicker 3s linear infinite;
          animation: glowFlicker 3s linear infinite;
          -webkit-transform-origin: center center;
          transform-origin: center center;
      }
      .outer-glow .inner-outer-glow {
          width: 70px;
          height: 70px;
          background: #8e555c;
          position: absolute;
          border-radius: 100%;
          opacity: 1;
          left: 50%;
          margin-left: -35px;
          top: 60px;
      }
    }
    @keyframes flameFlicker {
    0%, 100% {
        width: 16px;
        height: 17px;
    }
    25% {
        width: 19px;
        height: 17px;
    }
    50% {
        width: 17px;
        height: 16px;
    }
    75% {
        width: 17px;
        height: 19px;
    }
    }
    @keyframes glowFlicker {
      0%, 100% {
          opacity: 0.25;
      }
      50% {
          opacity: 0.4;
          -webkit-transform: scale(1.02);
          transform: scale(1.02);
      }
    }
  }
  .letter {
    position: absolute;
    top: 80px;
    left: 80px;
    img {
      width: 50%;
    }
  }
  .qiqiu {
    position: absolute;
    top: 200px;
    right: -10%;
    img {
      width: 20%;
    }
  }




`

export default CakeWrapper
