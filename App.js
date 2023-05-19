import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
import JSX from './components/JSX';
import Properties from './components/Properties';
import StateManagement from './components/StateManagement';
import Counter from './components/Counter';
import Destructuring from './components/Destructuring';
import EventHandling from './components/EventHandling';
import EventBinding from './components/EventBinding';
import ParentComponent from './components/ParentComponent';
import ConditionalRendering from './components/ConditionalRendering';
import HelloWorld from './components/HelloWorld';
import ListRendering from './components/ListRendering';


function App() {
  return (
    <div className="App">
      <h5>Hello React!</h5>
      <ListRendering />
      {/* <HelloWorld /> */}
      {/* <hr />
      <EventHandling />
      <FunctionalComponent />
      <ClassComponent /> 
      <JSX /> */}

      {/* <Properties name='Aniket' surName='Singh' />
      <Properties name='Himanshu' surName='Chauhan'/>
      <ClassComponent name='Akshaj' surName='Singh' />  */}
      
      {/* <StateManagement />
      <Counter />
      <Destructuring propName = "propName"/>

      <EventBinding /> 
      <ParentComponent /> */}
      {/* <ConditionalRendering /> */}
    </div>
  );
}

export default App;
