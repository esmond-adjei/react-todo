import './App.css';

import Header from './components/Header';
import MainView from './components/MainView';
import TaskInput from './components/TaskInput';

function App() {
  return (
    <div className='App'>
      <Header />
      <MainView />
      <TaskInput />
    </div>
  );
}

export default App;
