import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, {githubInfoloader} from './components/github/Github.jsx'


// const router = createBrowserRouter([ //this router function right but there is an other option we can create 
//   {
//         path: '/',
//         element: <Layout/>,
//         children: [
//       {
//         path:"",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "Contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

// one more way we can define route

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>} >
          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='user/:userid' element={<User/>} />
          <Route 
          loader={githubInfoloader}
          path='/Github' 
          element={<Github/>}/>


        </Route>

    )

)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
