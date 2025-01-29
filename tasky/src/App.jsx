import React, { useState } from 'react';
import './App.css';
import Task from './components/Task';

function App() {

  const [ taskState, setTaskState ] = useState({
    tasks: [
      { title:"Dishes", description: "Empty dishwasher", deadline: "Today" ,priority: "High" },
      { title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", priority: "High"},
      { title: "Tidy up", deadline: "Today", priority: "High" }
    ]
  });


  return (
    <div className="container">
      <h1>Tasky</h1>
  {taskState.tasks.map((task) => (              
    <Task 
      title={task.title}
      description={task.description}
      deadline={task.deadline}
      key={task.id}
      priority={task.priority}
    />
  ))}


    </div>
  );
}

export default App;
