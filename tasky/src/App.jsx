import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" />
      <Task title="Laundry" deadline="Tomorrow" />
      <Task title="Laundry" deadline="Tomorrow">
       
    </Task>
    <Task title="Tidy" deadline="Today" description="Yes">
      
    </Task>
    </div>
  );
}

export default App;
