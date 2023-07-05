import Footer from "./footer";
import Content from "./content";
import { useState } from "react";
function New() {
  const [firstNumber, setFirstNumber] = useState(0)
  const [secondNumber, setSecondNumber] = useState(0)
  const handleInputA = (e) => {
    console.log(e)
    setFirstNumber(e.target.value)
  }
  return (
    <div className="App">
      <hr />
      <input
        onInput={e => handleInputA(e)}
        value={firstNumber}
        type="text" />
      <input
        onInput={e => setSecondNumber(e.target.value)}
        value={secondNumber}
        type="text" />
      <div>
        <Summation firstNumber={firstNumber} secondNumber={secondNumber} />
      </div>
      <Content />
      <div>
      </div>
      <hr />
      <Footer />
    </div>
  );
}

export default New;

const Summation = (props) => {
  return (<span>Summation is:
    {parseInt(props.firstNumber) + parseInt(props.secondNumber)}</span>)
}
