import React, { useState } from "react";
import './Bmi.css'

const BmiCal = () => {
    const [weight,setWeight]=useState()
    const [height, setHeight] = useState()
    const [bmi,setBmi]=useState('')
    const [message, setMessage] = useState('')
    
    //logic
    let calcBmi = (e) => {
        e.preventDefault();
        if (weight === 0 && height === 0) {
            alert('please enter a valid weight and height')
        }
        else {
            let bmi = ((weight / height*height) * 703)
            setBmi(bmi.toFixed(1))

            if (bmi < 25) {
                setMessage('You are under weight')
            }
            else if (bmi >= 25 && bmi < 30) {
                setMessage("You are a healthy weight person")
            }
            else {
                setMessage("You are overWeight")
            }
        }
    }
    //reload
    let reload = () => {
        window.location.reload()
    }

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label htmlFor="">Weight(ibs)</label>
            <input
              type="number"
              placeholder="Enter Weight in Pound"
                          value={weight}
                          onChange={(e)=>setWeight(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Height (in)</label>
            <input
              type="number"
              placeholder="Enter Height in inches"
                          value={height}
                          onChange={(e)=>setHeight(e.target.value)}
                          
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BmiCal;
