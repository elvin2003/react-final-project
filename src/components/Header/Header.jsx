import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import "./Header.css"

function Header() {
  let [formVisible, setFormVisible] = useState(false);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "ADVANCED_FILTER",
      load: formVisible
    })
  }, [formVisible])

  let filterClickHandler = () => {
    if (!formVisible) {
      setFormVisible(true);
    } else {
      setFormVisible(false);
    }
  }

  return (
    <header className='Header'>
      <h1>HomePage</h1>
      <div>
        <form>
          <div className='form-head'>

            <label>
              Input field
            </label>

            <input type={"text"} />

            <button>
              Search
            </button>
            <br />
            <a href='#' onClick={filterClickHandler}>Advanced filter <i className="fa-sharp fa-solid fa-chevron-down"></i></a>

          </div>

        </form>
      </div>
    </header>
  )

}

export default Header
