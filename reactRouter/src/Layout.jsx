import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet /> 
    {/* yeh react-router-dom ka feature hai yeh bataat hai ki yeh jahaan aa jaayega woh cheezein change ho jaaya jarengi baaki same rahega..matlab ki idhar humne isko beech mei likha hai to iske upar and neeche ki cheezein fixed rahengi page per baaki sab change ho sakta hai...basically yeh dynamic feature deta hai page ko...per main isko aise hi use nahin kar sakta mujhe bataana hoga ki main ek layout de raha hoon usi ke according main chahta hoon page ko to isliye mujhe index file ko khabar deni hogi */}
    <Footer />
    </>
  )
}

export default Layout
//yeh isliye banaaya jiss se mere header and footer fixed rahein bas beech ki cheezein change ho kuchh bhi naya action karne per