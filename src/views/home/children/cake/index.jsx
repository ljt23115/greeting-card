import React, { memo } from 'react'
import CakeWrapper from './style'
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'

const Cake = memo(() => {
  const { width, height } = useWindowSize()
  return (
    <CakeWrapper>
      <div className="popup">按 F11 进入全屏模式   观看效果更加  ^v^</div>
      <div className="popup popup2">请点击 右上角按钮 播放音乐 ~ v ~</div>
      <Confetti
      width={width}
      height={height}
    />
      <div className="cover">
        <div className="text">
          <img src="pageMaterial\img\common\word\word_title.png" alt="" />
          <div className="firework">
            <img
              src="pageMaterial\img\common\decoration\fireworksDisplay.png"
              alt=""
            />
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
