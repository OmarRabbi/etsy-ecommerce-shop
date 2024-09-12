import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './pages/Shop'
import Header from './Components/Header'
import Category from './Pages/Category'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Footer from './Components/Footer'

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<Category  category="men"/>}/>
        <Route path='/womens' element={<Category category="women"/>}/>
        <Route path='/kids' element={<Category category="kid"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
