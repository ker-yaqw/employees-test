
import { useState } from "react";
import './dropdown-input.scss';

const DropdownInput = () => {
      const [isActive, setIsActive] = useState(false);
      const [selected, setIsSelected] = useState("Subscribed");
      return (
        <div className="dropdown-wrapper">
          <div className="dropdown">
            <div
              onClick={(e) => {
                setIsActive(!isActive);
              }}
              className="dropdown__btn"
            >
              {selected}
              <span
                className={isActive ? "fas fa-caret-up" : "fas fa-caret-down"}
              />
            <svg className="dropdown__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="upper-arrow">
                <path fill="#fff" d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"></path>
            </svg>
            </div>
            <div
              className="dropdown__content"
              style={{ display: isActive ? "block" : "none" }}
            >
              <div
                className="dropdown__item"
                onClick={(e) => {
                  setIsSelected(e.target.textContent);
                  setIsActive(!isActive);
                }}
              >
                Not Subscribed
              </div>
              <div
                className="dropdown__item"
                onClick={(e) => {
                  setIsSelected(e.target.textContent);
                  setIsActive(!isActive);
                }}
              >
                Other
              </div>
              <div
                className="dropdown__item"
                onClick={(e) => {
                  setIsSelected(e.target.textContent);
                  setIsActive(!isActive);
                }}
              >
                Subscribed
              </div>
            </div>
          </div>
        </div>
      );
    }

export default DropdownInput;