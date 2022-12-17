import { Router, Routes, Route } from 'react-router-dom'
import Categories from '../../components/Categories/Categories'
import Header from '../../components/Header/Header'


function HomePage1() {
  return (
    <div className="HomePage1">
      <Header />
      <Categories />
    </div>
  )
}
export default HomePage1
