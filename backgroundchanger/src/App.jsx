import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" >
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button 
          onClick={() => setColor("red")} //onclick need fuction not direct value 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}
          >Red</button>
          <button 
          onClick={() => setColor("blue")} //onclick need fuction not direct value 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}
          >Blue</button>
          <button 
          onClick={() => setColor("black")} //onclick need fuction not direct value 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}
          >Black</button>
          <button 
          onClick={() => setColor("white")} //onclick need fuction not direct value 
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"white"}}
          >white</button>
          <button
          onClick={() => setColor("green")} //onclick need fuction not direct value 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}
          >Green</button>
          <button 
          onClick={() => setColor("yellow")} //onclick need fuction not direct value 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"yellow"}}
          >Yellow</button>
          <button 
          onClick={() => setColor("violet")} //onclick need fuction not direct value 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"violet"}}
          >violet</button>
        </div>
      </div>
    </div>
  )
}

export default App

//------------- Random color code by using below code------------////

// import React, { useState } from 'react';

// const BackgroundChanger = () => {
//   // State to hold the background color
//   const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Initial background color is white

//   // Function to handle background color change
//   const changeBackgroundColor = () => {
//     // Generate a random hex color code
//     const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
//     // Set the new background color
//     setBackgroundColor(randomColor);
//   };

//   return (
//     <div style={{ backgroundColor: backgroundColor, height: '100vh', textAlign: 'center', paddingTop: '50px' }}>
//       <h1>Background Changer</h1>
//       <p>Current Background Color: {backgroundColor}</p>
//       <button onClick={changeBackgroundColor}>Change Background Color</button>
//     </div>
//   );
// };

// export default BackgroundChanger;
