import "./CoinsDescription.css"
import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function CoinsDescription() {

  const navigate = useNavigate();

  let selector = useSelector((state) => {
    return state.data;
  })

  let { coinList } = useSelector((state) => {
    return state;
  })

  let clickHandler = () => {
    navigate(-1);
  }

  let params = useParams();

  let v = selector.filter((item) => {
    return item.id == params.id;
  })

  return (
    <div className="CoinsDescription">
      {v.map((element) => {
        return <div key={element.id}>
          <div className='coin'>
            <img src={element.tableData.imgUrlFront} alt='coin' />
            <img src={element.tableData.imgUrlBack} alt='coin' />
          </div>
          <div className='content'>
            <h1>
              {element.name}
            </h1>
            <p>{element.description.firstParagraph}</p><br />
            <p>{element.description.secondParagraph}</p><br />
            <p>{element.description.thirdParagraph}</p>

            <table cellSpacing="0">
              <tbody>
                <tr>
                  <td>Issuing Country</td>
                  <td>{element.tableData["Issuing Country"]}</td>
                </tr>
                <tr>
                  <td>Composition</td>
                  <td>{element.tableData.Composition}</td>
                </tr>
                <tr>
                  <td>Quality</td>
                  <td>{element.tableData.Quality}</td>
                </tr>
                <tr>
                  <td>Denomination</td>
                  <td>{element.tableData.Denomination}</td>
                </tr>
                <tr>
                  <td>Year</td>
                  <td>{element.tableData.Year}</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>{element.tableData.Weight}</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>{element.tableData.Price}</td>
                </tr>
              </tbody>
            </table>


            <a onClick={clickHandler} className='backToTheList'>Back to the list</a>
          </div>
        </div>
      })}
    </div>
  )

}

export default CoinsDescription
