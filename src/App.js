import './App.css';
import './style/custom.css';
import './style/input.css'; // tailwind css

import Header from './components/Header';
import MainView from './components/MainView';
import TasksInput from './components/TasksInput';

function App() {
  return (
    <div className='App'>
      <Header />
      <MainView />
      <TasksInput />
    </div>
  );
}

export default App;
