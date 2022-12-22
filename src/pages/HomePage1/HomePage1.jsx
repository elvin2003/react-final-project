import { Router, Routes, Route, Form } from 'react-router-dom'
import Categories from '../../components/Categories/Categories'
import FilterForm from '../../components/FilterForm/FilterForm'
import Header from '../../components/Header/Header'


function HomePage1() {
  return (
    <div className="HomePage1">
      <Header path={"Homepage"}/>
      <FilterForm/>
      <Categories />
    </div>
  )
}
export default HomePage1
