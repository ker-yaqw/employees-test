import React from 'react';
import './switch.scss';

const Switch = () => {
  return (
    <div className="react-switch">
      <label className="react-switch__label">
        <input
            className="react-switch-checkbox"
            id={`react-switch-new`}
            type="checkbox"
        />
        <label
            className="react-switch-label"
            htmlFor={`react-switch-new`}
        >
            <span className={`react-switch-button`} />
        </label>
        Mode
      </label>
    </div>
  );
};

export default Switch;