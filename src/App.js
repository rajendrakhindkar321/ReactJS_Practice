import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import Profile from './Components/Profile';
import Message from './Components/Message';
import FunctionEvent from './Components/FunctionEvent';
import ClassEvent from './Components/ClassEvent';

function App() {
  return (
    <div className="App">
      {/* <Profile name = "Rajendra" lastName ="Khindkar">
        <h1>This is my my Profile.</h1>
      </Profile>
      <Profile name = "John" lastName="Ford"/>
      <Profile name = "Mark" lastName="Ben"/> 
      <Message messageCode = "10" messageContent = "This is a class props"/>
      <FunctionEvent/>
      <ClassEvent/>
       */}
      
      <Counter />
    </div>
  );
}

export default App;
