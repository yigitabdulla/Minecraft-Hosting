import React from 'react'
import './servers.scss'
import { servers } from '../../lib/servers.js'
import { addToCart } from '../../redux/slices/cartSlice.jsx'
import { useSelector , useDispatch } from 'react-redux'

export default function Servers() {

    const dispatch = useDispatch()

    const cart = useSelector(store => store.cart.items)
    console.log(cart)

    const findDetail = (product) => {
        const server = servers.filter(server => product.id === server.id)
    }

    const handleAddToCart = (product) => {
        dispatch(addToCart({
            productId: product.id,
            quantity: 1
        }))
        findDetail(product)
    }


    return (
        <div className='servers'>

            <div className="servers-info">
                <p>More People You Have</p>
                <img src="/enchanment-table-bg.gif" alt="" />
                <p>More Power You Need</p>
            </div>

            <div className="server-container">
                {servers.map((server) => (
                    <div className="server" key={server.id}>

                        <div className="server-title">
                            <img src={server.image} alt="" />
                            <p>{server.name}</p>
                            <p className='most-preferred'>{server.users} Users</p>
                        </div>

                        <div className="server-info">

                            <div>{server.info}</div>

                            <li className="price">${server.price} per month</li>
                            <li className='ram'>{server.ram} GB Ram</li>
                            <li className="people">Up to {server.maxUser} people</li>
                            <li className="locations">+15 server locations</li>

                        </div>

                        <button className='server-button' onClick={() => handleAddToCart(server)}>Add to cart</button>

                        <div className="discount">10% discount with LUMINO10 code!</div>
                    </div>
                ))}
            </div>

            <div className="help">
                <p>Can't decide? <a href="/contact">Contact us</a> so we can help you</p>
            </div>
        </div>

    )
}
