import { useState } from 'react';
import Header from './components/Header';
import './App.css';

function App() {
  const [number, setNumber] = useState(0)
  return (
    <div className="App">
      <Header number={number}/>
      <hr />
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
    </div>
  );
}

export default App;
