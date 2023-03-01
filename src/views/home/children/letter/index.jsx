
import React, { memo, useRef, useEffect, useState } from 'react'
import LetterWrapper from './style'
import { useInView } from "framer-motion"
import classNames from 'classnames'

const Letter = memo(() => {
  const letterRef = useRef()
  const pRef = useRef()
  const isInView = useInView(letterRef)

  const [ letterUrl, setUrl ] = useState('pageMaterial/img/jieRan/letter/text_jieRan.png')
  const [ AnimSwitch, setSwitch ] = useState(false)


  const imgClick = (url) => {
    if(url === letterUrl) { return }
    setSwitch(true)


    setTimeout(() => {
      setSwitch(false)
      setUrl(url)
    }, 2000)
  }

  // useEffect(() => {
  //   if(!isInView) { return }
  //   const span = pRef.current
  //   const text = pRef.current.innerText
  //   pRef.current.innerText = ''
  //   const chars = text.split('')
  //   let index = 0;
  //   let typing
  //   setTimeout(() => {
  //     typing = setInterval(function() {
  //       if (index < chars.length) {
  //         let char = chars[index];
  //         span.innerText += char;
  //         index++;
  //       } else {
  //         clearInterval(typing);
  //       }
  //     }, 100);
  //   }, 4500)

  //   return () => {
  //     clearInterval(typing)
  //   }
  // }, [pRef, isInView])

  return (
    <LetterWrapper ref={letterRef}>
      <div className="letter-wrapper1">
        <div className="letter-wrapper2">
          <div className="cover">
            <img className={classNames('tuceng2', { animationCover: isInView })} src="img/tuceng2.png" alt="" />
            <img src="img/tuceng1.png" alt="" />
          </div>
          <div className={classNames('letter', { animationLetter: isInView })}>
            {/* <p className={classNames({ animationP: isInView })} ref={pRef}>
            测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
            </p> */}
            <img className={classNames({animationImg: AnimSwitch})} src={letterUrl} alt="" />
          </div>
          <div className="envelope">
            <img src="img/envolope-top.png" alt="" />
          </div>
        </div>
      </div>

      <div className="letter-lists">
        <img src="pageMaterial\img\jieRan\envelope\envelope_close_jieRan.png" alt="" onClick={() => imgClick('pageMaterial/img/jieRan/letter/text_jieRan.png')} />
        <img src="pageMaterial\img\patrick\envelope\envelope_close_patrick.png" alt="" onClick={() => imgClick('pageMaterial/img/patrick/letter/letter_patrick.png')}/>
        <img src="pageMaterial\img\xunGuang\envelope\envelope_xunGuang.png" alt="" onClick={() => imgClick('pageMaterial/img/patrick/letter/letter_patrick.png')}/>
        <img src="pageMaterial\img\jieRan\envelope\envelope_close_jieRan.png" alt="" onClick={() => imgClick('pageMaterial/img/patrick/letter/letter_patrick.png')}/>
      </div>
    </LetterWrapper>
  )
})



export default Letter