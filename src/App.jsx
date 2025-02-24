import HomePage from './components/Homepage/dashboard'
import CartPage from './components/CartPage/cart'
import CheckoutPage from './components/CheckOutPage/checkout'
import {Routes, Route} from "react-router-dom"

const App = () => {


  return (
    <div className="bg-gray-50">
       {/* <Navbar />  */}
      <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/cart" element={<CartPage />} />
      <Route exact path="/checkout" element={<CheckoutPage />} />
      {/* <Route exact path="/ready" element={<Ready />} /> */}
      </Routes>
      
    </div>
  )
}

export default App

