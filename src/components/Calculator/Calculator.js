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
const createDigits = () => {
  const digits = [];

  for (let i=1; i<10; i++) {
    digits.push(
      <button className="calc-button" onClick = {() =>updateCalc(i.toString())} key={i}>{i}</button>
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

  return (<div className="calcTotal">
    <div className="calc">
    <div className="calculator">
    <div className="display">
    {result ? <span>({result}) </span> : ""}

    {calc || "0"}
  </div>
    <div className="operators ">
    <button className="calc-button" onClick = {() => updateCalc('/')}>/</button>
    <button className="calc-button" onClick = {() => updateCalc('*')}>*</button>
    <button className="calc-button" onClick = {() => updateCalc('+')}>+</button>
    <button className="calc-button" onClick = {() => updateCalc('-')}>-</button>
    <button className="calc-button" onClick = {deleteLast}>DEL</button>
  </div>
    <div className="digits">
    {createDigits()}
    <button className="calc-button" onClick = {() => updateCalc('0')}>0</button>
    <button className="calc-button" onClick = {() => updateCalc('.')}>.</button>
    <button className="calc-button" onClick = {calculate}>=</button>
  </div>
    </div>
    </div>
    <div className="calcbutt">
    <button className="btn btn-dark btn-lg  "onClick={()=>navigate("/applications")}>Go back</button>
</div>
</div>
  );
}

export default Calculator;
