import { useState } from 'react';
import Timer from './timer';
import TextInput from './text-input';
import Credits from './credits.jsx';
import './App.css';

function App() {
  const [goals, setGoals] = useState([]);
  const [finishedGoals, setFinishedGoals] = useState([]);
  const addGoal = (newGoal) => {
    setGoals([...goals, newGoal]);
  };
  return (
    <div className="App">
        <div> {goals[0]} </div>
        <Timer />
        <div> next goal </div>
        <TextInput submit={addGoal}/>
        <div> list of goals </div>
        <Credits />
    </div>
  );
}

export default App;
