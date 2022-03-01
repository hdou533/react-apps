
import './App.css';
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className='app'>
      <div className='container'>
        <div className='temperature-container'>
          {count}°C
        </div>
        <button className='btn' onClick={()=>setCount(count + 1)}>+</button>
        <button className='btn' onClick={()=>setCount(count - 1)}>-</button>
      </div>
    </div>
  );
}

export default App;
