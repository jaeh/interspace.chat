import React, { useState, useEffect, useContext } from 'react'
import { FloatingSpaceContext } from '../../contexts/FloatingSpaceContext'
import styled from '@emotion/styled'

const ChatContainer = styled.div`
  width: '100%';
  height: '100%';
`

function ChatInstance() {
  return <ChatContainer className="gitter-chat-embed"></ChatContainer>
}

export default ChatInstance
