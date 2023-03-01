import React, { memo, useEffect, useRef, useState } from 'react'
import VideoWrapper from './style'

const Video = memo(({ pauseAudioPlay }) => {
  const videoRef = useRef(null)
  // 播放/暂停
  const [playing, setPlaying] = useState(false)
  // 播放/暂停按钮
  const [playIcon, setPlayIcon] = useState('play')
  // 视频列表
  const videoList = [
    '/pageMaterial/video/video_1.mp4',
    '/pageMaterial/video/video_2.mp4',
    '/pageMaterial/video/video_3.mp4',
    '/pageMaterial/video/video_4.mp4'
  ]
  const [videoIndex, setVideoIndex] = useState(0)
  // 是否在播放默认视频
  const [isDefaultVideo, setIsDefaultVideo] = useState(true)

  const videoPlayHandler = () => {
    if (playing) {
      pauseVideo()
    } else {
      playVideo()
    }
  }

  useEffect(() => {
    if (playing) {
      setPlayIcon('pause')
    } else {
      setPlayIcon('play')
      pauseAudioPlay()
    }
  }, [playing])

  // 播放视频
  const playVideo = () => {
    setIsDefaultVideo(false)
    pauseAudioPlay()

    if (videoRef.current) {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  // 暂停视频
  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      setPlaying(false)
    }
  }

  // 切换视频
  const changeVideo = (index) => {
    setIsDefaultVideo(false)

    if (videoRef.current) {
      videoRef.current.src = videoList[index]
      setVideoIndex(index)
      playVideo()
    }
  }

  return (
    <VideoWrapper>
      <div className="video-wrapper" >
        <div className="video-content">
          {/* 视频背景边框 */}
          <div
            className="video-bg"
          >
            {/* 播放暂停按钮背景 */}
            <img
              className="video-control-bg"
              src="/pageMaterial/img/common/videoBoard/video_control.png"
              onClick={videoPlayHandler}
            ></img>
            {/* 播放暂停按钮 */}
            <img
              className="video-control"
              src={`/pageMaterial/img/common/videoBoard/video_${playIcon}.png`}
              onClick={videoPlayHandler}
            ></img>
          {/* 视频内容 */}
            <video
              ref={videoRef}
              src={videoList[videoIndex]}
              className="video-viewport"
              controls
              autoPlay={!isDefaultVideo}
            ></video>
          </div>

        </div>
          <div className="video-select">
            {
              videoList.map((item, index) => {
                return (
                  <div
                    className={`video-select-item ${videoIndex === index ? 'video-select-item-active' : ''}`}
                    key={index}
                    onClick={() => changeVideo(index)}
                  >
                    <img src={`/pageMaterial/img/common/videotape/videotape_${index + 1}.png`} alt="" />
                  </div>
                )
              })
            }
          </div>
      </div>
    </VideoWrapper>
  )
})

export default Video
