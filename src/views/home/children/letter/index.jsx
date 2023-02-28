
import React, { memo, useRef, useEffect } from 'react'
import LetterWrapper from './style'
import { useInView } from "framer-motion"
import classNames from 'classnames'

const Letter = memo(() => {
  const letterRef = useRef()
  const isInView = useInView(letterRef, { once: true })


  return (
    <LetterWrapper ref={letterRef}>
      <div className="letter-wrapper">
        <div className="cover">
          <img className={classNames('tuceng2', { animationCover: isInView })} src="img/tuceng2.png" alt="" />
          <img src="img/tuceng1.png" alt="" />
        </div>
        <div className={classNames('letter', {})}>
          <p>
          测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
          </p>
        </div>
        <div className="envelope">
          <img src="img/envolope-top.png" alt="" />
        </div>
      </div>
    </LetterWrapper>
  )
})



export default Letter