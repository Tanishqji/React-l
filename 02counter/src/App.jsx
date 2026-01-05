import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setcounter]= useState(0)
 
// let counter=45
const addvalue=()=>{
  // console.log("value added",counter);
  // counter=counter+1;
  setcounter(counter+1);

  
}
const removevalue=()=>{
  setcounter(counter-1);
}
  return (
    <>
     <h1>counter project</h1>
     <h2>values{counter}</h2>

     <button onClick={addvalue}>add value</button>
     <br/>
     <br/>

     <button onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
