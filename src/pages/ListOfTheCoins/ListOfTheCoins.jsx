import Header from '../../components/Header/Header'
import ListOfTheCoinsC from '../../components/ListOfTheCoinsC/ListOfTheCoinsC'
import "./ListOfTheCoins.css"

function ListOfTheCoins({coinNameList,coinImgURLList,coinInfoList}) {
  return (
    <div className="ListOfTheCoins">
      <Header />
      <ListOfTheCoinsC coinNameList={coinNameList} coinImgURLList={coinImgURLList} coinInfoList={coinInfoList}/>
    </div>
  )
}

export default ListOfTheCoins
