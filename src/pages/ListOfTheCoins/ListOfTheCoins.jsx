import FilterForm from '../../components/FilterForm/FilterForm'
import Header from '../../components/Header/Header'
import ListOfTheCoinsC from '../../components/ListOfTheCoinsC/ListOfTheCoinsC'
import "./ListOfTheCoins.css"

function ListOfTheCoins() {
  return (
    <div className="ListOfTheCoins">
      <Header path="List of the coins"/>
      <FilterForm />
      <ListOfTheCoinsC/>
    </div>
  )
}

export default ListOfTheCoins
