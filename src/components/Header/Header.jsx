
import { useState } from "react"
import "./Header.css"

function Header() {

  let [filterVisible,setFilterVisible] = useState(false);

  let filterClickHandler = ()=>{
    if (!filterVisible){
      setFilterVisible(true);
    }else{
      setFilterVisible(false);
    }
    // console.log(filterVisible);
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
