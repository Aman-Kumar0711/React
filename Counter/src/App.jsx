import {useState} from 'react'
function App() {
  //jab bhi humko state mei jo change hai usko UI mei propogate karna hota hai tab hum use karte hain useState hook
  let [counter,setCounter]=useState(15) //kuchh aur bhi naam set kar sakte hain jo [,] iske andar rakhe
  const addValue=()=>{
    // counter=counter+1
    if(counter<20) setCounter(counter+1)
  }
  const decValue=()=>{
    //counter=counter-1
    if(counter>0) setCounter(counter-1)
  }
  //yahaan pe react ki value pata chalegi, kyun ki counter variable jahaan jahaan bhi aaye wahaan mujhe update karna padega woh, js mei karte to har jagah ka reference dena padta per react mei kaam ho jaayega aasaani se by using hooks
  //jab bhi humko UI mei kuchh change karna hota hai tab hum usko hook ki madad se hi karte hain jiss se woh change reflect ho screen per
  //bahut saare hooks hain jaise useState,useEffect, useMemo, useCallback etc
  //state and UI mei syncing karwaata hai useState
  return (
    <>
    <h1>This is a Counter App</h1>
    <h2>Counter Value:{counter}</h2>
    <button onClick={addValue}>Increase Value</button>
    <br/>
    <button onClick={decValue}>Decrease Value</button>
    </>
  )
}

export default App
