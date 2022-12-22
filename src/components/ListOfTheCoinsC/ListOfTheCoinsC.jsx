import { useSelector } from "react-redux"
import "./ListOfTheCoinsC.css"
import { Link } from "react-router-dom";

function ListOfTheCoinsC() {

  let selector = useSelector((e) => {
    return e.coinList;
  })

  return (
    <div className="ListOfTheCoinsC">

      <div className='grid-container'>

        {selector.map((item) => {
          return <div className='grid-item' key={item.id}>
            <div className='coinImg'>
              <Link to={`/coinsdescription${item.id}`}><img src={item.tableData.imgUrlFront} alt='coin' /></Link>
            </div>
            <div className='coinInfoTxt'>
              <h3>{item.name}</h3>
              <p>{item.description.firstParagraph}</p>
            </div>
          </div>
        })}

      </div>

    </div>
  )
}

export default ListOfTheCoinsC
