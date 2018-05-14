import React from 'react';

import './index.css';

export default ({counter, decrease, increase}) => (
  <div className="counter">
    <button onClick={decrease}>-</button>
    <span>{counter}</span>
    <button onClick={increase}>+</button>
  </div>
);
