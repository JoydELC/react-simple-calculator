import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
    e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value));
  };
 
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value));
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    if(inputRef.current.value == 0){
      alert("Do not divide by 0");
      inputRef.current.value = null
    }else{
      setResult((result) => result / Number(inputRef.current.value)); 
    }
  };
 
  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value = null;
  }; 
 
  function resetResult(e) { 
  	e.preventDefault();
    setResult(0);
    inputRef.current.value = null;
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form>
        <div className="result">
        <p ref={resultRef}> 
          {result} 
        </p> 
        </div> 
        <div className="display">
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        </div> 
        <div className="Buttons-calc">
        <button onClick={plus}>Add</button> 
        <button onClick={minus}>Substract</button> 
        <button onClick={times}>Multiply</button>
        <button onClick={divide}>Divide</button>
        <button onClick={resetInput}>Reset Input</button> 
        <button onClick={resetResult}>Reset Result</button> 
        </div>
      </form> 
    </div> 
  ); 
} 
 
export default App; 
