import { Router, Routes, Route, Form } from 'react-router-dom'
import FilterForm from '../../components/FilterForm/FilterForm'
import Header from '../../components/Header/Header'


function HomePage2() {
  return (
    <div className="HomePage2">
      <Header />
      <FilterForm />
    </div>
  )
}

export default HomePage2