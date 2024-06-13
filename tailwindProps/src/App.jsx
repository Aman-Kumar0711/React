import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 tet-black p-4 rounded-xl mb-4'>Tailwind CSS</h1>    
    <Card username="Aman" btnText="Click me" /> 
    {/* yeh jo username and btnText maine diya hai woh props hi hain ab unko handle main karunga original card component mei */}
    <Card username="Anjali" btnText="Visit me" />
    </>
  )
}
//mujhe waapas use karna ho to main iss Card component ko use kar sakta hoon...per ho sakta hai mujhe kuchh changes karne ho alag alag cards mei
//uske liye I will use props(jab bhi hum koi component banaate hain unke paas access hota hai props ka)

export default App
