import React, { useState } from 'react'
import './cart.scss'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useSelector , useDispatch } from 'react-redux'
import {changeQuantity} from '../../redux/slices/cartSlice'

export default function Cart() {

    const dispatch = useDispatch()
    
    const cart = useSelector(store => store.cart.items)
    console.log(cart)

    const handleMinusQuantity = (id,quantity) => {
        dispatch(changeQuantity({
            id: id,
            quantity: quantity-1
        }))
    }

    const handlePlusQuantity = (id,quantity) => {
        dispatch(changeQuantity({
            id: id,
            quantity: quantity+1
        }))
    }

    const handleDelete = (id) => {
        dispatch(changeQuantity({
            id:id,
            quantity: 0
        }))
    }

    const calculateTotalPrice = (items) => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
      };

    return (
        <div className='cart'>

            <div className="order">
                <h3>Cart</h3>

                {cart.map(cartItem => <div key={cartItem.id} className="cart-item">
                    <img src={cartItem.image} />
                    <div className='title'>{cartItem.name}</div>
                    <div>{cartItem.ram} GB Ram</div>
                    <div>Up to {cartItem.users} People</div>
                    <div>{cartItem.price}$/mo</div>
                    <div className='quantity-buttons'><button onClick={() => handleMinusQuantity(cartItem.id, cartItem.quantity)}>-</button>{cartItem.quantity}<button onClick={() => handlePlusQuantity(cartItem.id, cartItem.quantity)}>+</button></div>
                    <button className='cart-delete-button' onClick={() => handleDelete(cartItem.id)}><DeleteOutlineIcon /></button>
                </div>)}

                <div className="billing-address">
                    <h5>Select billing address</h5>
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>

                <div className="payment">
                    <h5>Payment Informations</h5>

                    <div className="cart-info">

                        <div className='cart-name'>
                            <p>Name on the card</p>
                            <input type="text" />
                        </div>

                        <div className="cart-number">
                            <p>Cart Number</p>
                            <input type="text" />
                        </div>

                        <div className="expiration">
                            <p>Expiration Date</p>
                            <div className='dates'>
                                <input type="text" placeholder='Month' />
                                /
                                <input type="text" placeholder='Year' />
                            </div>
                        </div>

                        <div className='cvv'>
                            <p>CVV</p>
                            <input type="text" />
                        </div>

                        <div className="discount">
                            <p>Discount Coupon</p>
                            <input type="text" />
                        </div>
                    </div>
                </div>

                <div className='total'>Total is <p>{calculateTotalPrice()}$/mo</p></div>

                <button className='finish-order'>Finish Order</button>
            </div>

        </div>
    )
}
