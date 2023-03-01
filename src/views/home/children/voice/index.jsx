import PropTypes from 'prop-types'
import React, { memo } from 'react'
import VoiceWrapper from './style'

const Voice = memo((props) => {
  return (
    <VoiceWrapper>
      <h1>Voice</h1>
    </VoiceWrapper>
  )
})

Voice.propTypes = {}

export default Voice