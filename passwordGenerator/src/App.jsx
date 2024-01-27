import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = 
    "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*(){}[]~`<>"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
      
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(()=> {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,12); // to select the specific text range
    window.navigator.clipboard.writeText(password) //to copy on window clipboard
  },[password])

  useEffect(()=> {passwordGenerator()
  }, [length, numberAllowed, charAllowed,passwordGenerator])
  return (
    <>
      <div className=
      'w-full max-w-md mx-auto shadow-md rounded-md px-4 my-8 text-black font-bold bg-gray-500'>

      <h1 className='text-3xl font-bold font-serif text-center text-green-950 my-2'>Password Generator</h1>

        <div className=
        'flex shadow rounded-xl overflow-hidden mb-4'>
          <input 
            type="text"
            value={password}
            className='outline-none w-full py-1 px-2 mb-0'
            placeholder='Password'
            readOnly  
            ref={passwordRef}        
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none 
          bg-blue-500 text-white
          hover:bg-blue-300 hover:text-green-700
           px-3 py-1 shrink-0'>Copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={30}
            value={length}
            className='cursor-pointer'
            onChange={(e)=> {setLength(e.target.value)}}
            />
            <label>length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
                  defaultChecked={numberAllowed}
                  id='numberInput'
                  onChange={()=> {
                    setNumberAllowed((previousvalue)=>!previousvalue);
                  }}            
            />
            <label htmlFor="numberInput">Numbers</label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
                  defaultChecked={charAllowed}
                  id='charInput'
                  onChange={()=> {
                    setCharAllowed((previousvalue)=>!previousvalue);
                  }}            
            />
            <label htmlFor="charInput">Characters</label>

          </div>

        </div>
      </div>
    </>
  )
}

export default App
