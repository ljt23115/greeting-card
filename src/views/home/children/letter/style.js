import styled from 'styled-components'

const LetterWrapper = styled.div`
  .letter-wrapper {
    width: 500px;
    height: 700px;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    .cover {
      position: absolute;
      bottom: 0;
      img {
        width: 100%;
        height: 100%;
      }
      .tuceng2 {
        position: relative;
        z-index: 6;
        transform: rotateX(-180deg);
        transform-origin: bottom;


      }
      .animationCover {
        animation-name: flip;
        animation-duration: 1s;
        animation-delay: 1s;
        animation-fill-mode: forwards;
      }

      @keyframes flip {
        from { transform: rotateX(-180deg); }
        to {
          transform: rotateX(0deg);
          margin-bottom: -5px;
          z-index: 0;
        }
      }

    }
    .letter {
      background-color: rgb(255, 252, 228);
      background-image: url('img/58dd9dc889dd22f326031dc8527827f.png');
      width: 90%;
      height: 500px;
      position: relative;
      margin: 0 auto;
      z-index: 3;
      /* left: 50%;
      transform: translateX(-50%); */
      padding: 20px;
      margin-bottom: -320px;

      p {
        letter-spacing: 2px;
      }
      .animationP {
        animation-delay: 4.5s;
        animation-fill-mode: forwards;
        /* visibility: hidden; */
        /* animation: blink 0.7s infinite; */
      }
      @keyframes blink {
        50% { opacity: 0; }
        100% { opacity: 1; }
      }

    }
    .animationLetter {
      transform: translateY(-300px);
      transition: transform 2s ease;
      transition-delay: 2.2s;
    }

    .envelope {
      width: 100%;
      position: absolute;
      bottom: 0;
      z-index: 5;
      img {
        width: 100%;
      }
    }

    /* &:hover .letter{
      transform: translateY(-300px);
      transition: transform 2s ease;
    } */
  }
`

export default LetterWrapper
