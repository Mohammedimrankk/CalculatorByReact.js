import './App.css';
import React,{useState} from 'react';
import { evaluate } from 'mathjs';
function App() {
  const [value,setValue]=useState("")
  const handleButtonClick=(e)=>{
    setValue(value+e.target.value)
  }
  const handleEqualClick=()=>{
    try{
  const result=evaluate(value);
  setValue(result.toString())    
    }
    catch(error){
      setValue("Error")
    }
  }
  return (
    <div className="container">
         <div className="calculator">
            <form action=''>
              <div className='display'>
              <input type='text' value={value}/>
              </div>
              <div>
                <input type='button' value='AC' onClick={e=>setValue('')}/>
                <input type='button' value='DE' onClick={e=>setValue(value.slice(0,-1))}/>
                <input type='button' value='.'  onClick={handleButtonClick}/>
                <input type='button' value='/'  onClick={handleButtonClick}/>
              </div>
              <div>
                <input type='button' value='7' onClick={handleButtonClick}/>
                <input type='button' value='8' onClick={handleButtonClick}/>
                <input type='button' value='9' onClick={handleButtonClick}/>
                <input type='button' value='*' onClick={handleButtonClick}/>
              </div>
              <div>
                <input type='button' value='4' onClick={handleButtonClick}/>
                <input type='button' value='5' onClick={handleButtonClick}/>
                <input type='button' value='6' onClick={handleButtonClick}/>
                <input type='button' value='+' onClick={handleButtonClick}/>
              </div>
              <div>
                <input type='button' value='1' onClick={handleButtonClick}/>
                <input type='button' value='2' onClick={handleButtonClick}/>
                <input type='button' value='3' onClick={handleButtonClick}/>
                <input type='button' value='-' onClick={handleButtonClick}/>
              </div>
              <div>
                <input type='button' value='0' onClick={handleButtonClick}/>
                <input type='button' value='00' onClick={handleButtonClick}/>
                <input type='button' value='=' className="equal" onClick={handleEqualClick}/>
              </div>
            </form>   
         </div>
    </div>
  );
}

export default App;
