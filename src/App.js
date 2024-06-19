

import './App.css';
import { useState } from 'react';

function App() {

  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(null);

  const handleClick = (e) => {
    setInputValue((prevValue)=> `${prevValue}${e.target.innerText}`);
  }
  const evaluate = (e) => {
    if(inputValue === "") setResult('Error');
    else{
      const res = eval(inputValue);
      setResult(res);
    }
  }

  const handleClear = (e) => {
    setInputValue('');
    setResult(null);
  }


  return (
    <div className='container'>
      <h1>React Calculator</h1>
      <input type="text" className="form-control" placeholder="" value={inputValue} readOnly/>
      <div className='result'>{result}</div>
      <div className='btn-container'>
        <button onClick={handleClick}>7</button>
        <button onClick={handleClick}>8</button>
        <button onClick={handleClick}>9</button>
        <button onClick={handleClick}>+</button>
        <button onClick={handleClick}>4</button>
        <button onClick={handleClick}>5</button>
        <button onClick={handleClick}>6</button>
        <button onClick={handleClick}>-</button>
        <button onClick={handleClick}>1</button>
        <button onClick={handleClick}>2</button>
        <button onClick={handleClick}>3</button>
        <button onClick={handleClick}>*</button>
        <button onClick={handleClear}>C</button>
        <button onClick={handleClick}>0</button>
        <button onClick={evaluate}>=</button>
        <button onClick={handleClick}>/</button>
    </div>
    </div>
  );
}

export default App;