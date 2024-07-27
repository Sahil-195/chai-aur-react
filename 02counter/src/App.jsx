import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let [counter,SetCounter] = useState(15)
  
  function addvalue() {
    // counter += 1;
    // SetCounter(counter)
    if(counter < 20) {
      SetCounter(counter+1)
    }
  }
  
  function removevalue() {
    // counter -= 1;
    // SetCounter(counter)
    if(counter > 0) {
      SetCounter(counter-1)
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addvalue}>Add Value {counter}</button>
      <br />
      <button onClick={removevalue}>Remove Value {counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
