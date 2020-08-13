import React from 'react'
import Task from '../components/Task'

const TaskContainer = props => {

  function renderTasks() {
    return props.taskList.map( ( t, idx) =>
        <Task
          key={idx}
          task={t}
        />
      )
  }
  return (
    <div className="tasks">
      <h5>Tasks</h5>
      <div>
        { renderTasks() }
      </div>
    </div>
  )
}

export default TaskContainer
