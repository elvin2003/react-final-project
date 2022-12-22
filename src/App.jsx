import { useState } from 'react'
import { Router, Routes, Route } from 'react-router-dom'
import HomePage1 from "./pages/HomePage1/HomePage1"
import "./App.css"
import ListOfTheCoins from './pages/ListOfTheCoins/ListOfTheCoins'
import CoinsDescription from './pages/CoinsDescription/CoinsDescription'
import { useEffect } from 'react'
import data from "../dataMain.json"
import { useDispatch } from 'react-redux'

function App() {

  let dispatch = useDispatch();
  
  useEffect(()=>{
    
  },[])

  return (
    <div className="App">
      <div className='container'>
        <Routes>
          <Route path="/" element={<HomePage1 />} />
          <Route path="/listofthecoins" element={<ListOfTheCoins />} />
          <Route path="/coinsdescription:id" element={<CoinsDescription />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
