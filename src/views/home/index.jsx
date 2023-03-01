import React, { memo, useRef, useState, useEffect } from 'react'
import HomeWrapper from './style'
import Cake from './children/cake'
import Letter from './children/letter'
import Video from './children/video'
import Name from './children/name'
import Voice from './children/voice'
import { throttle } from '../../utils/throttle'

const Home = memo(() => {
  const fullPageEl = useRef()
  const currentPage = useRef(0)

  const audioRef = useRef()

  const [musicOn, setMusic] = useState(false)

  const closeAudio = function () {
    const audioEl = audioRef.current

    // 检查音频是否正在播放
    if (audioEl && audioEl.paused) {
      audioEl.play()
      setMusic(true)
    } else {
      audioEl.pause()
      setMusic(false)
    }
  }

  useEffect(() => {
    const audioEl = audioRef.current

    // 检查音频是否正在播放
    if (audioEl && audioEl.paused) {
      audioEl.play()
    }
  }, [])

  useEffect(() => {
    const pagesEl = fullPageEl.current.children
    const handleFun = throttle(handleWheel, 1000)
    window.addEventListener('wheel', handleFun)

    function handleWheel(event) {
      const direction = event.deltaY > 0 ? 1 : -1
      if (
        currentPage.current + direction >= 0 &&
        currentPage.current + direction < pagesEl.length
      ) {
        const aimPage = currentPage.current + direction
        currentPage.current = aimPage

        fullPageEl.current.style.transform = `translateY(-${aimPage * 100}vh)`
      }
    }
    return () => {
      window.removeEventListener('wheel', handleFun)
    }
  }, [])

  return (
    <HomeWrapper>
      <audio className="audio" loop ref={audioRef}>
        <source src="pageMaterial/bgm/bgm.mp3" type="audio/mpeg" />
      </audio>
      <div className="closeAudio" onClick={() => closeAudio()}>
        <span>♫</span>
        <span>{musicOn ? '关闭背景音乐' : '播放背景音乐'}</span>
      </div>
      <div className="full-page" ref={fullPageEl}>
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
          <Voice></Voice>
        </div>
        <div className="page page5">
          <Name></Name>
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home
