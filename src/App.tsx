import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Page/Home"
import Login from "./Page/Login"
import Register from "./Page/Register"
import ProductList from "./Page/ProductList"
import ProductDetail from "./Page/ProductDetail"
import Cart from "./Page/Cart"
import Navbar from "./Component/Navbar"


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/product" element={<ProductList />}/>
      <Route path="/product/:id" element={<ProductDetail />}/>
      <Route path="/cart" element={<Cart />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App