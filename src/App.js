import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    alert("You clicked this button");
    setCount(count + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={
            "https://images.unsplash.com/photo-1681713670707-dab2de9965de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          }
          className="App-logo"
          alt="historical town"
        />
        <p>Historical old town with narrow alleys</p>
        <button onClick={handleClick}>Counter</button>
        <p>'You clicked this button {count} times'</p>
        {/* <h1>First React App</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
