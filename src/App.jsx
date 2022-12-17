import { useState } from 'react'
import { Router, Routes, Route } from 'react-router-dom'
import HomePage1 from "./pages/HomePage1/HomePage1"
import "./App.css"
import ListOfTheCoins from './pages/ListOfTheCoins/ListOfTheCoins'
import CoinsDescription from './pages/CoinsDescription/CoinsDescription'
import { useEffect } from 'react'
import data from "../dataMain.json"

function App() {
  
  useEffect(()=>{
    console.log(data);
  },[])

  return (
    <div className="App">
      <div className='container'>
        <Routes>
          <Route path="/" element={<HomePage1 />} />
          <Route path="/listofthecoins" element={<ListOfTheCoins coinNameList={["Canadian Beaver"]} coinImgURLList={['./images/frontCanada.svg']} coinInfoList={['"Canadian beaver". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.']}/>} />
          <Route path="/coinsdescription" element={<CoinsDescription coinFrontURL="./images/frontCanada.svg" coinBackURL="./images/backCanada.svg"
            // coinTitle, coinInfo, coinCountry, coinComposition, coinQuality, coinDenomination, coinYear, coinWeight, coinPrice
            coinTitle="Canadian Beaver" coinInfo={{
              p1: '"Canadian beaver". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.',
              p2: 'In the center of the obverse is a portrait of Queen Elizabeth II, the profile is directed to the right. The inscription on the left semicircle (English) ELIZABETH II, on the right semicircle D · G · REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is a mint mark.',
              p3: 'In the center of the coin reverse is a Canadian beaver on a rock sticking out of the water. At the top is a semicircle with the inscription "5 cents" between two maple leaves. At the bottom in two lines is the inscription CANADA (CANADA) and the year of minting.'
            }}
            coinCountry="CANADA" coinComposition="Nickel" coinQuality="BU" coinDenomination="5 cents" coinYear="1965" coinWeight="4.54 g" coinPrice="40$"
          />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
