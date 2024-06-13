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
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} /> 
      {/* user/:userid dynamic data lene ke liye likha hai , basically URL mei agar /user khula hoga to uske baad agar main /100 likhu to userid 100 ho jaaye...ab yahi cheez mujhe alag define bhi karni hogi User component mei */}
      <Route 
      loader={githubInfoLoader} 
      //yeh loader ek bahut badhiya feature hai react-router-dom ka , yeh useEffect se pehle hi kaam karna shuru kar deta hai and cheez ko cache memory mei rakhta hai matlab yeh ki jaise hi main apne page pe github pe click karunga uss se pehle se hi API se data fetch ho jaayega to mujhe github waale tab pe jaate hi woh cheez pehle hi milegi
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

