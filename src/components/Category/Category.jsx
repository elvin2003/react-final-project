import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import "./Category.css"

function Category({title,imageUrl}) {

  let dispatch = useDispatch();

  let handleClick = ()=>{
    dispatch({
      type: title
    })
  }

  return (
    <div className="Category">
      <h4>{title}</h4>
      <Link to='/listofthecoins' onClick={handleClick}>Show all <i className="fa-sharp fa-solid fa-chevron-right"></i></Link>
      <img src={imageUrl} alt='coin'/>
    </div>
  )
  
}

export default Category
