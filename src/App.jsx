import { Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './components/layout/Main'
import Home from './components/Pages/Home'
import Products from './components/Pages/Products'
import Brands from './components/Pages/Brands'
import Contact from './components/Pages/Contact'
import CartPage from './components/Pages/CartPage'
import GadgetPage from './components/Subpages/GadgetPage'
import ScrollTop from './components/Subpages/ScrollTop'
import Admin from './components/Subpages/Admin'

function App() {

  return (
    <>
     <ScrollTop />
      <Routes>
            <Route path='/' element={<Main />}>
             <Route index element={<Home />} />
             <Route path='/product' element={<Products />} />
             <Route path='/brand' element={<Brands />} />
             <Route path='/contact' element={<Contact />} />
             <Route path='/cartpage' element={<CartPage />} />
             <Route path='gadgetPage/:id' element={<GadgetPage />} />
             
            </Route>
      </Routes>
    </>
  )
}

export default App
