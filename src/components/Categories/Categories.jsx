import Category from '../Category/Category'
import "./Categories.css"

function Categories() {
  return (
    <div className="Categories">
      <Category title="Bullion coins" imageUrl="./imageCategories/bullionCoins.svg"/>
      <Category title="Exclusive coins" imageUrl="./imageCategories/exclusiveCoins.svg"/>
      <Category title="Commemorative coins" imageUrl="./imageCategories/commemorativeCoins.svg"/>
    </div>
  )
}

export default Categories