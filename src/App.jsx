import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const names = ["Jay", "Sabita", "Ranuk", "Sumitra"];

  return (
    <>
      <div className="side-display">
        <h2 className="singer">Choose Singer</h2>
        <ul className="list">
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
      <div className="container">
        <div className="test">
          <img
            className="imge"
            src="/public/img2.jpeg"
            alt="img"
            height={200}
            width={350}
          />
        </div>
        <h1>Order Summary</h1>
        <p className="para">
          To help consumers compare the different features of health benefits
          and coverage, the Affordable Care Act generally requires all group
          health plans and health insurance companies to provide individuals a
          “summary of benefits and coverage” that “accurately describes the
          benefits and coverage under the plan.”
        </p>
        <div className="btn-container">
          <div className="btn-container1">
            <p id="annual">Annual Plan</p>
            <p id="price">$33.33/Yers</p>
          </div>
          <div id="change">
            <p>Change</p>
          </div>
        </div>
        <div className="payment">Proceed To Payment</div>
        <p id="Cancel">Cancell Order</p>
      </div>
    </>
  );
}
export default App;
