
import React, { memo, useEffect, useState, useRef } from 'react'
import CakeWrapper from './style'

const Cake = memo(() => {
  // const [ref, inView] = useInView();
  const [ useMusic, setMusic ] = useState(false)
  const audioRef = useRef()

  const closeAudio = function() {
    audioRef.current.play()
    console.log(111)
  }

  useEffect(() => {
    const audioEl = audioRef.current;

    // 检查音频是否正在播放
    // if (audioEl && audioEl.paused) {
    //   audioEl.play();
    // }

  }, [])

  return (
    <CakeWrapper>



      <div className="cover">
        <div className="text">
          <img src="pageMaterial\img\common\word\word_title.png" alt="" />
          <div className="firework">
            <img src="pageMaterial\img\common\decoration\fireworksDisplay.png" alt="" />
          </div>
        </div>
        <div className="qiqiu">
          <img src="pageMaterial\img\common\decoration\balloon.png" alt="" />
        </div>
        <div className="cake">
          <img src="pageMaterial\img\common\decoration\cake.png" alt="" />
          <div className="fire">
          <div className="flame">
            <div className="inner-flame"></div>
          </div>
          <div className="outer-glow">
              <div className="inner-outer-glow"></div>
          </div>
          </div>
          <div className="light">
            <img src="pageMaterial\img\common\decoration\light.png" alt="" />
          </div>
        </div>
        <div className="toName">
          <img src="pageMaterial\img\common\word\word_changle.png" alt="" />
        </div>

      </div>

    </CakeWrapper>
  )
})


export default Cake