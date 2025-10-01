import React, {  useContext } from 'react';

import './Cart.css'
import{StoreContext} from '../../context/StoreContext'
const Cart = () => {

  const{cartItems,food_list,removeFromCart}=useContext(StoreContext)
  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {food_list.map((items,index)=>{
          if(cartItems[items._id]>0)
          {
            return(
              <div className='cart-items-title cart-items-item'>
              <img src={items.img} alt="" />
              <p>{items.name}</p>
              <p>{items.price}</p>
              <p>{cartItems[items._id]}</p>
              <p>{items.price*cartItems[items._id]}</p>
              <p>{}</p>

                </div>
            )
          }
        })}
        
      </div>
      </div>
       

  )
}

export default Cart
