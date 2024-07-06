import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { deleteCart } from '../Redux/Action'

const Cart = () => {
  const state = useSelector((state) => state.handleCart || [])
  const dispatch = useDispatch()

  const [count, setCount] = useState(0);

  const handleClose = (product) => {
    dispatch(deleteCart(product));
  }

  const cartItems = (cartItem) => (
    <div className="px-5 my-5 bg-light rounded-3 " key={cartItem.id} style={{ height: 180 }} >
      <div className="container py-4 ">
        <button onClick={() => handleClose(cartItem)} className='btn-close float-end' aria-label='close'></button>
        <div className="row justify-content-center ">
          <div className="col-md-4 " style={{}}>
            <img src={cartItem.image} alt={cartItem.title} height="180px" width="180px" style={{ paddingBottom: 20 }} />
          </div>
          <div className="col-md-4">
            <h3>{cartItem.title}</h3>
            <p className='lead fw-bold'>₹{cartItem.price}</p>
          </div>
          <div className="col-md-4">
          <h5>Quantity</h5>
            <button className="btn btn-outline-primary" onClick={handledecrement} style={{ fontSize: '15px' }}>-</button>
            <button className="btn btn-outline-primary" style={{fontSize: '15px'}}>{count}</button>
            <button className="btn btn-outline-primary" onClick={handleincrement} style={{ fontSize: '15px' }}>+</button>
          </div>
        </div>
      </div>
    </div>
  )

  const emptyCart = () => (
    <div className="px-4 my-5 bg-light rounded-3 py-5">
      <div className="container py-4">
        <div className="row">
          <h3>Your Cart is Empty</h3>
        </div>
      </div>
    </div>
  )

  const proceedButton = () => (
    <div className="container">
      <div className="row">
        <NavLink to="/checkout" className="btn btn-outline-dark mb-5 mx-auto" style={{ width: 200 }}>Proceed to Checkout</NavLink>
      </div>
    </div>
  )




  const handleincrement = () => {
    setCount(count + 1);
  }

  const handledecrement = () => {
    if(count > 0){
      setCount(count - 1);
    }
  }

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && proceedButton()}


    </>
  );
};

export default Cart
