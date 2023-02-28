
import React, { memo, useRef, useEffect } from 'react'
import LetterWrapper from './style'
import { useInView } from "framer-motion"
import classNames from 'classnames'

const Letter = memo(() => {
  const letterRef = useRef()
  const pRef = useRef()
  const isInView = useInView(letterRef)

  useEffect(() => {
    if(!isInView) { return }
    const span = pRef.current
    const text = pRef.current.innerText
    pRef.current.innerText = ''
    const chars = text.split('')
    let index = 0;
    let typing
    setTimeout(() => {
      typing = setInterval(function() {
        if (index < chars.length) {
          let char = chars[index];
          span.innerText += char;
          index++;
        } else {
          clearInterval(typing);
        }
      }, 100);
    }, 4500)

    return () => {
      clearInterval(typing)
    }
  }, [pRef, isInView])

  return (
    <LetterWrapper ref={letterRef}>
      <div className="letter-wrapper">
        <div className="cover">
          <img className={classNames('tuceng2', { animationCover: isInView })} src="img/tuceng2.png" alt="" />
          <img src="img/tuceng1.png" alt="" />
        </div>
        <div className={classNames('letter', { animationLetter: isInView })}>
          <p className={classNames({ animationP: isInView })} ref={pRef}>
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