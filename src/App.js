import './App.css';
import './style/custom.css';
import './style/input.css'; // tailwind css

import Header from './components/Header';
import MainView from './components/MainView';
import TasksInput from './components/TasksInput';

import React from 'react';

import todoData from './data';

function App() {

  const [todoTasks,setTodoTasks] = React.useState(todoData)

  return (
    <div className='App'>
      <Header todoTasks={todoTasks} setTodoTasks={setTodoTasks}/>
      <MainView  todoTasks={todoTasks} setTodoTasks={setTodoTasks} />
      <TasksInput todoTasks={todoTasks} setTodoTasks={setTodoTasks} />
    </div>
  );
}

export default App;
