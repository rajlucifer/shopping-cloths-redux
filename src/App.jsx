
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
// we have to import the route and routes


function App() {
   

  return (
    <div className=' '>
      <div>
        <Navbar/>
      </div>
      {/*here we write the page like home and cart page */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    </div>

  )
}

export default App
