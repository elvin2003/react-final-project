import "./CoinsDescription.css"

function CoinsDescription({ coinFrontURL, coinBackURL, coinTitle, coinInfo, coinCountry, coinComposition, coinQuality, coinDenomination, coinYear, coinWeight, coinPrice }) {

  return (
    <div className="CoinsDescription">

      <div className='coin'>
        <img src={coinFrontURL} alt='coin' />
        <img src={coinBackURL} alt='coin' />
      </div>
      <div className='content'>
        <h1>
          {coinTitle}
        </h1>
        <p>{coinInfo.p1}</p><br />
        <p>{coinInfo.p2}</p><br />
        <p>{coinInfo.p3}</p>

        <table cellSpacing="0">
          <tbody>
            <tr>
              <td>Issuing Country</td>
              <td>{coinCountry}</td>
            </tr>
            <tr>
              <td>Composition</td>
              <td>{coinComposition}</td>
            </tr>
            <tr>
              <td>Quality</td>
              <td>{coinQuality}</td>
            </tr>
            <tr>
              <td>Denomination</td>
              <td>{coinDenomination}</td>
            </tr>
            <tr>
              <td>Year</td>
              <td>{coinYear}</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>{coinWeight}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>{coinPrice}</td>
            </tr>
          </tbody>
        </table>


        <a href='#' className='backToTheList'>Back to the list</a>
      </div>
    </div>
  )

}

export default CoinsDescription
