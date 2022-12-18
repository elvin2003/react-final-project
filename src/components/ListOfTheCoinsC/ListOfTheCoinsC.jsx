import "./ListOfTheCoinsC.css"

function ListOfTheCoinsC({coinNameList, coinInfoList, coinImgURLList}) {
  return (
    <div className="ListOfTheCoins">

      <div className='grid-container'>
      
        <div className='grid-item'>
          <div className='coinImg'>
            <img src={coinImgURLList[0]} alt='coin'/>
          </div>
          <div className='coinInfoTxt'>
            <h3>{coinNameList[0]}</h3>
            <p>{coinInfoList[0]}</p>
          </div>
        </div>

        <div className='grid-item'>
          <div className='coinImg'>
            <img src={coinImgURLList[1]} alt='coin'/>
          </div>
          <div className='coinInfoTxt'>
            <h3>{coinNameList[1]}</h3>
            <p>{coinInfoList[1]}</p>
          </div>
        </div>

        <div className='grid-item'>
          <div className='coinImg'>
            <img src={coinImgURLList[2]} alt='coin'/>
          </div>
          <div className='coinInfoTxt'>
            <h3>{coinNameList[2]}</h3>
            <p>{coinInfoList[2]}</p>
          </div>
        </div>

        <div className='grid-item'>
          <div className='coinImg'>
            <img src={coinImgURLList[3]} alt='coin'/>
          </div>
          <div className='coinInfoTxt'>
            <h3>{coinNameList[3]}</h3>
            <p>{coinInfoList[3]}</p>
          </div>
        </div>

        <div className='grid-item'>
          <div className='coinImg'>
            <img src={coinImgURLList[4]} alt='coin'/>
          </div>
          <div className='coinInfoTxt'>
            <h3>{coinNameList[4]}</h3>
            <p>{coinInfoList[4]}</p>
          </div>
        </div>

        <div className='grid-item'>
          <div className='coinImg'>
            <img src={coinImgURLList[5]} alt='coin'/>
          </div>
          <div className='coinInfoTxt'>
            <h3>{coinNameList[5]}</h3>
            <p>{coinInfoList[5]}</p>
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default ListOfTheCoinsC
