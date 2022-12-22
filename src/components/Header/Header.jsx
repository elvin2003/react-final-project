import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./Header.css"

function Header({ path }) {
  let [formVisible, setFormVisible] = useState(false);

  let [searchInputValue, setSearchInputValue] = useState();

  let {filterCountry,filterMetal,filterQuality,filterFromYear,filterToYear,filterFromPrice,filterToPrice} = useSelector((state)=>{
    return state;
  })

  const navigate = useNavigate();
  let dispatch = useDispatch();

  let currentPath;

  if (path == "Homepage") {
    currentPath = ""
  } else {
    currentPath = "Homepage — List of the coins"
  }

  let pathClickHandler = (e) => {
    if (e.target.innerHTML == "Homepage") {
      navigate("/");
    }
  }

  let inputHandler = (event)=>{
    setSearchInputValue(event.target.value);
  }

  let searchClickHandler = (event)=>{
    event.preventDefault();

    dispatch({
      type: "SEARCH",
      load: searchInputValue
    })
  }

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
      <div className="path">
        <span onClick={pathClickHandler}>{currentPath.split(" — ")[0]}</span><span className={currentPath==""? "passive":"active"}> — </span><span onClick={pathClickHandler}>{currentPath.split(" — ")[1]}</span></div>
      <div>
        <form>
          <div className='form-head'>

            <label>
              Input field
            </label>

            <input type={"text"} onInput={inputHandler}/>

            <button onClick={searchClickHandler}>
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
