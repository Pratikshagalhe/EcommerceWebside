import './App.css';
import NavBar from './component/NavBar';
import Home from './component/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Products from './component/Products';
import About from './component/About';
import Contact from './component/Contact';
import Login from './component/Login';
import Register from './component/Register';
import Product from './component/Product';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { auth } from './component/firebase';
import Cart from './component/Cart';
function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  })
  return (
    <>
      <NavBar />
      <ToastContainer />
      {/* <BrowserRouter> */}
      <Routes>
        <Route path='/' element={user ? <Navigate to="/home" /> : <Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cart' element={<Cart/>}/>
      </Routes>

      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
