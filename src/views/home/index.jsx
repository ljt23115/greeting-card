import React, { memo, useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import HomeWrapper from './style'
import Cake from './children/cake'
import Letter from './children/letter'
import Video from './children/video'
import Name from './children/name'
import { throttle } from '../../utils/throttle'

const Home = memo(() => {
  const fullPageEl = useRef()
  const currentPage = useRef(0)

  const navigate = useNavigate()

  useEffect(() => {
    const pagesEl = fullPageEl.current.children
    const handleFun = throttle(handleWheel, 1000)
    window.addEventListener("wheel", handleFun);

    function handleWheel(event) {
      const direction = event.deltaY > 0 ? 1 : -1;
      if (currentPage.current + direction >= 0 && currentPage.current + direction < pagesEl.length) {
        console.log(currentPage.current + direction)
        const aimPage = currentPage.current + direction
        currentPage.current = aimPage

        fullPageEl.current.style.transform = `translateY(-${aimPage * 100}vh)`;

        // 添加或替换历史记录
        // const currentPageName = `/page${currentPage + 1}`;
        // const currentPageRoute = routes[currentPageName];
        // history.pushState({ page: currentPageName }, "", currentPageRoute);
        // navigate(currentPageName)
      }


    }
    return () => {
      window.removeEventListener("wheel", handleFun)
    }

  }, [])


  return (
    <HomeWrapper>
      <div className="full-page"  ref={fullPageEl}>
        <div className="page page1">
          <div className="cover">
            <Cake></Cake>
          </div>
        </div>
        <div className="page page2">
          <Letter></Letter>
        </div>
        <div className="page page3">
          <Video></Video>
        </div>
        <div className="page page4">
          <Name></Name>
        </div>
      </div>

    </HomeWrapper>
  )
})


export default Home
