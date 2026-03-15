import React, {useState} from "react";
import "./calculator.css"
import {useNavigate, useParams, useLocation} from 'react-router-dom';

function Calculator() {
    let navigate = useNavigate();
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const operators = ['/', '*', '+', '-', '.'];

const updateCalc = (value) =>{
  if(
    operators.includes(value) && calc === '' ||
    operators.includes(value) && operators.includes(calc.slice(-1)
  )
  ){
    return;
  }

  setCalc(calc+value);

  if(!operators.includes(value)) {
    setResult(eval(calc + value).toString());
  }
}
// Update createDigits to use new class
const createDigits = () => {
  const digits = [];

  for (let i=1; i<10; i++) {
    digits.push(
      <button className="kcalc-button" onClick = {() =>updateCalc(i.toString())} key={i}>{i}</button>
    );
  }

  return digits;
}
const calculate = () => {
  setCalc(eval(calc).toString());
}
const deleteLast = () => {
if(calc == "") {
  return;
}
const value = calc.slice(0, -1);
setCalc(value);
}

  return (<div className="kcalcTotal">
    <div className="kcalc">
    <div className="kcalculator">
    <div className="kcalc-display">
    {result ? <span>({result}) </span> : ""}

    {calc || "0"}
  </div>
    <div className="kcalc-operators ">
    <button className="kcalc-button" onClick = {() => updateCalc('/')}>/</button>
    <button className="kcalc-button" onClick = {() => updateCalc('*')}>*</button>
    <button className="kcalc-button" onClick = {() => updateCalc('+')}>+</button>
    <button className="kcalc-button" onClick = {() => updateCalc('-')}>-</button>
    <button className="kcalc-button" onClick = {deleteLast}>DEL</button>
  </div>
    <div className="kcalc-digits">
    {createDigits()}
    <button className="kcalc-button" onClick = {() => updateCalc('0')}>0</button>
    <button className="kcalc-button" onClick = {() => updateCalc('.')}>.</button>
    <button className="kcalc-button" onClick = {calculate}>=</button>
  </div>
    </div>
    </div>
    <div className="kcalcbutt">
      <button className="kcalc-back-btn" onClick={()=>navigate("/applications")}>Go back</button>
    </div>
</div>
  );
}

export default Calculator;
