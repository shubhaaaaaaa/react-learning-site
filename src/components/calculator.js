import {
    useState,
    useRef
  } from "react"; 
  
  function Calculator() { 
    const inputRef = useRef(null); 
    const resultRef = useRef(null); 
    const [result, setResult] = useState(0); 
   
    function plus(e) { 
      e.preventDefault(); 
      setResult((result) => result + Number(inputRef.current.value)); 
    }; 
   
    function minus(e) { 
      //stops the normal behavior when an event e occurs, i.e. does not refresh page after calling an event like clicking a button
      e.preventDefault(); 
      setResult((result) => result - Number(inputRef.current.value));
    };
   
    function times(e) { 
      e.preventDefault(); 
      setResult((result) => result * Number(inputRef.current.value)); 
    }; 
   
    function divide(e) { 
      e.preventDefault(); 
      setResult((result) => result / Number(inputRef.current.value)); 
    };
    
    function resetInput(e) { 
      e.preventDefault(); 
      inputRef.current.value = 0;
    }; 
   
    function resetResult(e) { 
      e.preventDefault(); 
      setResult(0);
    }; 
   
    return ( 
      <div> 
       <p style={{fontSize: "30px", textTransform: "uppercase"}} className=' main-heading text-center font-bold'>Simple Calculator</p><br />
        <form> 
          <div className="flex justify-center items-start gap-6 mt-5 text-black">
          <input
            className="p-3 rounded-md"
            pattern="[0-9]" 
            ref={inputRef} 
            type="number" 
            placeholder="Type a number" 
          />
          <p className="text-4xl font-bold p-2" ref={resultRef}> 
            {result} 
          </p> 
          </div>
          <br />

          <div className="flex justify-center items-center">
          <button className="p-2 mr-3 mb-5 outline-blue-400 outline rounded-md" onClick={plus}>add</button> 
          <button className="p-2 mr-3 mb-5 outline-blue-400 outline rounded-md" onClick={minus}>minus</button> 
          <button className="p-2 mr-3 mb-5 outline-blue-400 outline rounded-md" onClick={times}>times</button> 
          <button className="p-2 mr-3 mb-5 outline-blue-400 outline rounded-md" onClick={divide}>divide</button> 
          </div>

          
          <div className="flex justify-center items-center">
          <button className="p-2 mr-3 mb-5 outline-orange-400 outline rounded-md" onClick={resetInput}>Reset Input</button> 
          <button className="p-2 mr-3 mb-5 outline-orange-400 outline rounded-md" onClick={resetResult}>Reset Result</button> 
          </div>
        </form> 

        <p className='text-sm text-center italic mt-16 opacity-50'>Things I learnt:
                <ul>
                    <li>- using form</li>
                    <li>- useRef hook</li>
                </ul>
            </p>
      </div> 
    ); 
  } 
   
  export default Calculator; 
  