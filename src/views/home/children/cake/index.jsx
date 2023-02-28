
import React, { memo, useRef } from 'react'
import CakeWrapper from './style'
import { useInView } from "framer-motion"


const Cake = memo(() => {
  // const [ref, inView] = useInView();
  const cakeRef = useRef()
  const isInView = useInView(cakeRef)


  return (
    <CakeWrapper ref={cakeRef}>
      <div className="cake">
        <img src="img/page-1-sum_0000s_0001_cake.png" alt=""/>
        {/* <div className="zone-wrap">
        <div className="zone">
            <div className="magnets">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="sphere">
                <div className="core"></div>
            </div>
        </div>
        </div> */}
        <div className="fire">
          <div className="flame">
            <div className="inner-flame"></div>
          </div>
          <div className="outer-glow">
              <div className="inner-outer-glow"></div>
          </div>
        </div>
      </div>
      <div className="letter">
        <img src="img/page-1-sum_0005s_0000_满月快乐.png" alt="" />
      </div>
      <div className="qiqiu">
        <img src="/img/page-1-sum_0007s_0000_balloon0.png" alt="" />
        <img src="/img/page-1-sum_0008s_0000_balloon1.png" alt="" />
      </div>

    </CakeWrapper>
  )
})


export default Cake