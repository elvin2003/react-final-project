import "./ListOfTheCoinsC.css"

function ListOfTheCoinsC({coinNameList, coinInfoList, coinImgURLList}) {
  return (
    <div className="ListOfTheCoins">

      <div className='grid-container'>
      
        <div className='grid-item'>
          <div className='coinImg'>
            <img src={coinImgURLList} alt='coin'/>
          </div>
          <div className='coinInfoTxt'>
            <h3>{coinNameList[0]}</h3>
            <p>{coinInfoList[0]}</p>
          </div>
        </div>

        <div className='grid-item'>
          <div className='coinImg'>
            <img src={coinImgURLList} alt='coin'/>
          </div>
          <div className='coinInfoTxt'>
            <h3>{coinNameList[0]}</h3>
            <p>{coinInfoList[0]}</p>
          </div>
        </div>

        <div className='grid-item'>
          <div className='coinImg'>
            <img src={coinImgURLList} alt='coin'/>
          </div>
          <div className='coinInfoTxt'>
            <h3>{coinNameList[0]}</h3>
            <p>{coinInfoList[0]}</p>
          </div>
        </div>

        <div className='grid-item'>
          <div className='coinImg'>
            <img src={coinImgURLList} alt='coin'/>
          </div>
          <div className='coinInfoTxt'>
            <h3>{coinNameList[0]}</h3>
            <p>{coinInfoList[0]}</p>
          </div>
        </div>

        <div className='grid-item'>
          <div className='coinImg'>
            <img src={coinImgURLList} alt='coin'/>
          </div>
          <div className='coinInfoTxt'>
            <h3>{coinNameList[0]}</h3>
            <p>{coinInfoList[0]}</p>
          </div>
        </div>

        <div className='grid-item'>
          <div className='coinImg'>
            <img src={coinImgURLList} alt='coin'/>
          </div>
          <div className='coinInfoTxt'>
            <h3>{coinNameList[0]}</h3>
            <p>{coinInfoList[0]}</p>
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default ListOfTheCoinsC
