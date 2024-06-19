// App.js

import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling

const App = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      evaluateExpression();
    } else if (value === 'C') {
      clearInput();
    } else {
      setExpression(prevExpression => prevExpression + value);
    }
  };

  const evaluateExpression = () => {
    try {
      const evalResult = eval(expression); // Using eval for simplicity (not recommended for production)
      setResult(evalResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setExpression('');
    setResult('');
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input type="text" className="calculator-screen" value={expression} disabled />
      <div className="calculator-result">
        <input type="text" className="result-screen" value={result} disabled />
      </div>
      <div className="calculator-keys">
        <div className="calculator-row">
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('+')}>+</button>
        </div>
        <div className="calculator-row">
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('-')}>-</button>
        </div>
        <div className="calculator-row">
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('*')}>*</button>
        </div>
        <div className="calculator-row">
          <button onClick={() => handleClick('C')}>C</button>
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('=')}>=</button>
          <button onClick={() => handleClick('/')}>/</button>
        </div>
        {/* <div className="calculator-row">
          <button onClick={() => handleClick('C')}>C</button>
        </div> */}
      </div>
      {/* <div className="calculator-result">
        <input type="text" className="result-screen" value={result} disabled />
      </div> */}
    </div>
  );
};

export default App;

