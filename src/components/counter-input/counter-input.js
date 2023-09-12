import { React, useState } from 'react'
import './counter-input.scss';

const CounterInput = () => {
  const [counter, setCounter] = useState(18);
 
  const increase = () => {
    setCounter(count => count + 1);
    if (counter > 99) {
        setCounter(count => count - 1);
    }
  };
 
  const decrease = () => {
    setCounter(count => count - 1);
    if (counter < 19) {
      setCounter(count => count + 1);
    }
  };
 
  return (
    <div className="counter">
      <div className="counter__output">{counter}</div>
      <div className="btn__container">
        <button className="control__btn " onClick={decrease}>
          <svg className="control__btn-icon control__btn-icon--arrow-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="upper-arrow">
            <path fill="#fff" d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"></path>
          </svg>
        </button>
        <button className="control__btn" onClick={increase}>
          <svg className="control__btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="upper-arrow">
              <path fill="#fff" d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"></path>
            </svg>
        </button>
      </div>
    </div>
  );
}

export default CounterInput;