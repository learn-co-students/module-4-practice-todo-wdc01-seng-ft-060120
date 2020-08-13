import React from 'react'

const Task = props => {
  return (
    <div className='task'>
      <div class='label'>{ props.task.category }</div>
      <div class='text'>{ props.task.text}</div>
    </div>
  )
}

export default Task
