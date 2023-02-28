import styled from "styled-components";

const HomeWrapper = styled.div`

  .full-page {
    height: 400vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    transition: transform 1s ease;


    .page {
      height: 100vh;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      /* transition: all 1s ease; */
    }

    .page1 {
      background-image: radial-gradient(ellipse at center, #FDF3C2, #330900);

      position: relative;
      .cover {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 246, 203, 0.6);
        /* background: rgba(64, 45, 53, 0.8); */

      }


    }

    .page2 {
      background-color: green;
    }

    .page3 {
      background-color: blue;
    }
    .page4 {
      background-color: orange;
    }
  }



`

export default HomeWrapper