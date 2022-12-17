import "./Category.css"

function Category({title,imageUrl}) {

  return (
    <div className="Category">
      <h4>{title}</h4>
      <a href='#'>Show all <i className="fa-sharp fa-solid fa-chevron-right"></i></a>
      <img src={imageUrl} alt='coin'/>
    </div>
  )
  
}

export default Category
