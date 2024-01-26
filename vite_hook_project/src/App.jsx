import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  let [counter, setCounter] = useState(15) //this is hook, values can be True, false, "" 
  // let counter = 5

  const addValue =() => { 
    // counter = counter+1
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)

    // for interview perspective this is question 

    
    // pehle wala isliye nhi run kiya because react fiber bunch me value compile krta hai so same process ko ye ek bunch me process kr rha hai, but agar isko increase krna hi hai to niche wala process follow krege 
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)

    // aise use krege  
    // console.log("clicked", counter);
  }
  const removeValue =() => {
    setCounter(counter-1)
    // console.log("clicked", counter);
  } 
  return (
    <>    
      <h1>chai aur coffee</h1>
      <h2>counter value : {counter}</h2>
      <button
      onClick={addValue}
      >Add value {counter}</button>
      {/* <br /> */}
      <button
      onClick={removeValue}
      >Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
