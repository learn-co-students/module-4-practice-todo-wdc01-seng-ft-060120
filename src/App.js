import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import Header from './components/Header'
import Menu from './components/Menu'
import TaskContainer from './containers/TaskContainer'

class App extends React.Component {

  state = {
    tasks: [
      {
        text: 'Buy rice',
        category: 'Food'
      },
      {
        text: 'Save a tenner',
        category: 'Money'
      },
      {
        text: 'Build a todo app',
        category: 'Code'
      },
      {
        text: 'Build todo API',
        category: 'Code'
      },
      {
        text: 'Get an ISA',
        category: 'Money'
      },
      {
        text: 'Cook rice',
        category: 'Food'
      },
      {
        text: 'Tidy house',
        category: 'Misc'
      }
    ],
    categorySelected: 'All'
  }

  updateCategory = category => {
    this.setState({
      categorySelected: category
    })
  }

  filterDisplayTasks = () => {
    const { categorySelected, tasks } = this.state

    if ( categorySelected !== 'All'){
      return tasks.filter( task => task.category === categorySelected)
    }

    return tasks
  }

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <Header/>
        <Menu
          categories={ CATEGORIES }
          categorySelected={ this.state.categorySelected }
          updateCategory={this.updateCategory}
        />
        <TaskContainer 
          taskList={this.filterDisplayTasks()}
        />
      </div>
    );
  }
}


export default App;
