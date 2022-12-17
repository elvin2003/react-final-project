import Category from '../Category/Category'
import "./Categories.css"

function Categories() {
  return (
    <div className="Categories">
      <Category title="Bullion coins" imageUrl="./images/bullionCoins.svg"/>
      <Category title="Exclusive coins" imageUrl="./images/exclusiveCoins.svg"/>
      <Category title="Commemorative coins" imageUrl="./images/commemorativeCoins.svg"/>
    </div>
  )
}

export default Categories