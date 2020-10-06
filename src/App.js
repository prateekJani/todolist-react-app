import React from 'react';
import logo from './logo192.png';
import './App.css';
import ToDoListComponent from './Components/ToDoListComponent/ToDoListComponent'

function App() {
  return (
    <div className = "Outerbody">
      <div className="App">
        <header className="App-header">
          <img src={logo} alt = 'Logo' /> 
        </header>     
      </div>  
      <ToDoListComponent />
    </div>
    
  );
}

export default App;
