import React, { useState } from 'react'
import './cart.scss'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useSelector } from 'react-redux';
import { servers } from '../../lib/servers.js'

export default function Cart() {

    const [quantity, setQuantity] = useState(1)
    const [cartItems , setCartItems] = useState([])
    
    const cart = useSelector(store => store.cart.items)
    console.log(cart)

    const findDetail = (productId) => {
        const server = servers.find(server => productId === server.id); // find returns the first match
    };
    
    cart.forEach(item => findDetail(item.productId));

    const handleMinusQuantity = () => {
        setQuantity(quantity-1 < 1 ? 1 : quantity-1)
    }

    const handlePlusQuantity = () => {
        setQuantity(quantity+1)
    }
    

    return (
        <div className='cart'>

            <div className="order">
                <h3>Cart</h3>

                <div className="cart-item">
                    <img src='/snowman-head.png' />
                    <div className='title'>Snowman Server</div>
                    <div>4 GB Ram</div>
                    <div>Up to 20 People</div>
                    <div>20$/mo</div>
                    <button className='cart-delete-button'><DeleteOutlineIcon /></button>
                </div>

                <div className="cart-item">
                    <img src='/snowman-head.png' />
                    <div className='title'>Snowman Server</div>
                    <div>4 GB Ram</div>
                    <div>Up to 20 People</div>
                    <div>20$/mo</div>
                    <button className='cart-delete-button'><DeleteOutlineIcon /></button>
                </div>

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

                <div className='total'>Total is <p>40$/mo</p></div>

                <button className='finish-order'>Finish Order</button>
            </div>

        </div>
    )
}
