import React from 'react'
import {Link} from 'react-router-dom'
import CreateGroup from './CreateGroup'
import SendMessage from './SendMessage'
const Leader = () => {
  return (
    <div>
      <CreateGroup />
      <br />
      <SendMessage/>
    </div>
  )
}

export default Leader