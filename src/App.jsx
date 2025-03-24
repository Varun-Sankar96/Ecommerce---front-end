import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Infosection from './components/Infosection'
import Shop from './pages/Shop'
import Cart from './components/Cart'
import Checkout from './pages/Checkout'
import OrderConformation from './pages/OrderConformation'
import FilterData from './pages/FilterData'
import ProductDetails from './pages/ProductDetails'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
  
  const[order, setOrder]= useState(null)

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout'  element={<Checkout setOrder={setOrder} />}/>
        <Route path='/order-conformation'  element={<OrderConformation order={order}/>}/>
        <Route path='/filterData'  element={<FilterData/>}/>
        <Route path='/product/:id'  element={<ProductDetails/>}/>
        <Route path='/contact'  element={<Contact/>}/>
        <Route path='/about'  element={<About/>}/>

        
      </Routes>
      <Footer/>
    </Router>
      
    </>
  )
}

export default App
