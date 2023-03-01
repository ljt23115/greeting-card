import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import VoiceWrapper from './style'

const Voice = memo(({ pauseAudioPlay }) => {
  const [currentPlay, setCurrentPlay] = useState('luoXue')
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(null)

  const audioRef = React.createRef()

  const handleBtn = () => {
    if (isPlaying) {
      handlePause()
    } else {
      handlePlay()
    }
  }

  const handleTimeUpdate = (e) => {
    setCurrentTime(e.target.currentTime)
  }

  const handleLoadedMetadata = (e) => {
    setDuration(e.target.duration)
  }

  const handlePlay = () => {
    pauseAudioPlay()
    setIsPlaying(true)
    audioRef.current.play()
  }

  const handlePause = () => {
    setIsPlaying(false)
    audioRef.current.pause()
  }

  const checkedHandler = (name) => {
    setCurrentPlay(name)
    handlePlay()
  }

  return (
    <VoiceWrapper>
      <div className="voice-wapper">
        <div className="left">
          <div className="play">
            <img
              className="play-bg"
              src="/pageMaterial/img/common/recorde/record.png"
            ></img>
            <img
              className={`play-needle ${!isPlaying ? 'play-needle-pause' : ''}`}
              src="/pageMaterial/img/common/recorde/recordHand.png"
            ></img>
            <img
              onClick={handleBtn}
              className="play-icon"
              src={`/pageMaterial/img/common/recorde/${
                isPlaying ? 'recordPause' : 'recordPaly'
              }.png`}
            ></img>
          </div>
          <div className="autio-progress">
            <audio
              ref={audioRef}
              src={`/pageMaterial/voice/voice_${currentPlay}.mp3`}
              autoPlay={true}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
            />
            <progress max={duration} value={currentTime} />
          </div>
        </div>
        <div className="right">
          <img
            onClick={() => checkedHandler('luoXue')}
            className={`right-item first ${
              currentPlay === 'luoXue' && isPlaying ? 'right-item-highlight' : ''
            }`}
            src="/pageMaterial/img/luoXue/record/record-luoXue.png"
          />
          <img
            onClick={() => checkedHandler('jirRan')}
            className="right-item"
            src="/pageMaterial/img/jieRan/record/record-jieRan.png"
          />
        </div>
      </div>
    </VoiceWrapper>
  )
})

Voice.propTypes = {}

export default Voice
