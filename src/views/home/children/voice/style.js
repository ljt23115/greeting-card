import styled from 'styled-components'

const VoiceWrapper = styled.div`
.voice-wapper{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  .left{
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
    flex: 4;
    height: 100vh;
    .play{
      position: relative;
      width: 100%;
      .play-needle{
        position: absolute;
        top: 6rem;
        left: 4rem;
        width: 16rem;
        transform-origin: top left;
        transition: transform 0.3s;
      }
      .play-needle-pause{
        transform: rotate(-23deg);
      }
      .play-bg{
        position: absolute;
        top: 7rem;
        left: 3rem;
        width: 23rem;
      }
      .play-icon{
        position: absolute;
        top: 18.5rem;
        left: 13.6rem;
        width: 2rem;
      }
    }
    .autio-progress{
      position: absolute;
      top: 35rem;
      left: 8rem;
      left: 3rem;
      width: 23rem;
      progress{
        width: 23rem;
      }
      /* font-size: 2.5rem; */
    }
  }
  .right{
    flex: 6;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    height: 60vh;
    justify-content: space-between;
    .right-item{
      width: 250px;
      transition: transform 0.3s ease-out, margin-top 0.3s ease-out;
        transform-origin: top center;
    }
    .right-item:hover {
      transform: scale(1.05);
      margin-bottom: -10px;
    }

    .right-item-highlight {
      filter: brightness(190%);
      animation: pulse 1s ease-in-out infinite alternate;
    }

    @keyframes pulse {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.03);
    }
  }
  }

  progress::-webkit-progress-value {
    background-color: green;
  }
  /* Mozilla Firefox */
  progress::-moz-progress-bar {
    background-color: green;
  }
}
`

export default VoiceWrapper
