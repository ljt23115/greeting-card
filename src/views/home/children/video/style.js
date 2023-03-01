import styled from 'styled-components'

const VideoWrapper = styled.div`
  .video-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-around;
    /* position: relative; */
    .video-content {
      .video-bg {
        background: url('/pageMaterial/img/common/videoBoard/videoBoard.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
        width: 85rem;
        height: 35rem;
        position: relative;
      }
      .video-control-bg {
        position: absolute;
        left: 10.5rem;
        bottom: 3rem;
        width: 11rem;
      }
      .video-control {
        position: absolute;
        left: 14.3rem;
        bottom: 5rem;
        width: 4.5rem;
      }
      .video-viewport {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -55%);
        width: 37rem;
      }
    }
    .video-select {
      width:  85rem;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-around;
      box-sizing: border-box;
      padding: 0 10rem;
      .video-select-item {
        img {
          width: 13rem;
        }
      }
      .video-select-item-active{

      }
    }
  }
`

export default VideoWrapper
