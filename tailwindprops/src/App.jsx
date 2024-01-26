import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "mobile",
    designation: "laptop"
    }
  
  let newArr = [1,2,3]


  return (
    <>
      <h1 className='bg-gray-500 text-black rounded-2xl flex-col '>Tailwind test</h1>
          {/* <Card channel="chaihai" someObj={myObj} /> */}
          <Card username="chaihai" btnText="click here..." />
          <Card username ="chaikhatam" /> 
          {/* it uses the same vaule of each card but if we need different values in each card then we need props - properties */}

          </>
  )
}

export default App
