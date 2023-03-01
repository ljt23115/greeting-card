import styled from "styled-components";

const HomeWrapper = styled.div`
  .closeAudio {
    position: fixed;
    top: 30px;
    right: 0;
    color: #f0d8d0;
    cursor: pointer;
    width: 130px;
    height: 50px;
    background-color: #d39843;
    opacity: 0.8;
    z-index: 10;
    /* padding-right: 20px; */
    line-height: 50px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    display: flex;
    justify-content: space-evenly;
    margin-right: -95px;

    &:hover {
      transform: translateX(-95px);
      transition: all 1s ease;
    }
  }


  .full-page {
    height: 500vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    transition: transform 1s ease;
    position: relative;

    /* .audio {
      position: fixed;
      top: 20;
      right: 20px;
    } */


    .page {
      height: 100vh;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      /* transition: all 1s ease; */
    }

    .page1 {
      background-image: url('pageMaterial/img/backcolor/backcolor0.png');

      position: relative;
      .cover {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        /* background: rgba(255, 246, 203, 0.6); */
        /* background: rgba(64, 45, 53, 0.8); */

      }


    }

    .page2 {
      background-image: url('pageMaterial/img/backcolor/backcolor1.png');
    }

    .page3 {
      background-image: url('pageMaterial/img/backcolor/backcolor2.png');
    }
    .page4 {
      background-image: url('pageMaterial/img/backcolor/backcolor3.png');
    }
    .page5 {
      background-image: url('pageMaterial/img/backcolor/backcolor4.png');
    }
  }



`

export default HomeWrapper