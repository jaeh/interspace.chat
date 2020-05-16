import React, { useState, useEffect, useContext } from 'react'
import { FloatingSpaceContext } from '../../contexts/FloatingSpaceContext'

const ChatInstance = () => {
  const [discordRoom, setDiscordRoom] = useState({
    current: 692409996083855501,
    spaces: [
      ['main-room', 692423172020240444],
      ['lobby', 692423341046366208],
      ['mentor-ring', 692423431777681488],
      ['claim poap token', 693135339249991701],
    ],
    default: 692409996083855501,
  })
  const { currentFloatingSpaces: space } = useContext(FloatingSpaceContext)

  useEffect(() => {
    let spaceExists = false

    discordRoom.spaces.forEach(([maybeSpace, id]) => {
      if (space.includes(maybeSpace)) {
        spaceExists = true
        setDiscordRoom({ ...discordRoom, current: id })
      }
    })

    if (!spaceExists) {
      setDiscordRoom({ ...discordRoom, current: discordRoom.default })
    }
  }, [space, discordRoom])

  return (
    <iframe
      src={`https://titanembeds.com/embed/690315811293888778?css=85&defaultchannel=${discordRoom.current}&theme=DiscordDark`}
      width="100%"
      height="100%"
      frameBorder="0"
      title="discord chat"
    ></iframe>
  )
}

export default ChatInstance
