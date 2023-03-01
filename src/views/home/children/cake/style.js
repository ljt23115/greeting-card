import styled from 'styled-components'

const CakeWrapper = styled.div`
  .cover {
    display: flex;
    position: relative;

    .text {
      margin-left: 5%;
      margin-top: 6%;
      position: relative;

      img {
        width: 78vw;
        height: 20vh;
        position: relative;
        z-index: 8;
      }
      .firework {
        position: absolute;
        top: -80px;
        left: 0px;
        z-index: 5;
        img {
          width: 15vw;
        }
      }
    }
    .qiqiu {
      position: absolute;
      right: 0;
      top: 140px;
      img {
        width: 30vw;
        height: 50vh;
      }
    }
    .cake {
      position: absolute;
      left: 8%;
      bottom: 50px;
      z-index: 2;

      img {
        width: 30vw;
        height: 43vh;
        position: relative;
        z-index: 3;
      }
      .light {
        position: absolute;
        top: 0;
        transform: translate(2%, -48%);
        z-index: 0;
      }
      .fire {
        width: 160px;
        height: 163px;
        position: absolute;
        left: 50%;
        top: 0;
        z-index: 3;
        transform: translate(-43%, 20%);
        /* transform: scale(1.4); */
        .flame {
          width: 18px;
          height: 18px;
          background: #ffd678;
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
          background: #d1835c;
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
          background: #aa782f;
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
          background: #b57c29;
          position: absolute;
          border-radius: 100%;
          opacity: 1;
          left: 50%;
          margin-left: -35px;
          top: 70px;
        }
      }
      @keyframes flameFlicker {
        0%,
        100% {
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
        0%,
        100% {
          opacity: 0.25;
        }
        50% {
          opacity: 0.4;
          -webkit-transform: scale(1.02);
          transform: scale(1.02);
        }
      }
    }
    .toName {
      position: absolute;
      bottom: 0;
      right: 0;
      img {
        width: 38vw;
        margin: 0 30px 30px 0;
      }
    }
  }
`

export default CakeWrapper
