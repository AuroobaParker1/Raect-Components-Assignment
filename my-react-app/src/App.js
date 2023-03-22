import logo from './logo.svg';
import './App.css';
import { TestButton } from './Components/Buttons';
import BasicExample from './Components/Cards';

function App() {
  return (
    <div className="App">
      React App Demo
      <TestButton name = {"test button"}/>
      <BasicExample></BasicExample>
    </div>
  );
}

export default App;
