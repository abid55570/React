import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// const reactElement = {
//   type: 'a', //may be div, para, (type of element )
//   props: { // it is an object  key:value pair
//       href: 'https://google.com',
//       target: '_blank' //html 
//   },
//   children : 'click here to visit google'
// } //each element has to be white in this format 

const reactElement = React.createElement(
//predefined syntax as follows :--
  'a',  // first is tag - 'a', 'p', 'h1'
  //second parameter is adding prperties such as 'href' 'title' 'paragraph''target' ==Attributes 
  {href: 'https://google.com', target: '_blank'},
  'click to visit google'
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement
 
)
