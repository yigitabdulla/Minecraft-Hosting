import React, { useEffect, useState } from 'react'
import './navbar.scss'
import { useSelector } from 'react-redux';

export default function Navbar() {

  const [totalQuantity, setTotalQuantity] = useState(0)
  const [auth, setAuth] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const cart = useSelector(store => store.cart.items);

  useEffect(() => {
    let total = 0;
    cart.forEach(item => {
      total += item.quantity
    });
    setTotalQuantity(total)
  }, [cart])

  return (
    <nav>
      <div className="left">
        <img src='/navbar-icon.jpeg' alt="navbar icon" />
        <a href="/">Lumino Hosting</a>
      </div>

      <div className="right">
        <ul className={isMobileMenuOpen ? 'active' : ''}>
          <li><a href="/">Home</a></li>
          <li><a href="/servers">Servers</a></li>
          <li><a href="/cart">Cart <p>{totalQuantity}</p></a></li>
          <li><a href="/contact">Contact Us</a></li>
          {auth && <li><a>Logout</a></li>}
          {auth ? <li><a
            href='/profile'
          >
            Profile
          </a>
            </li> : <li><a href="/login">Login</a></li>}
        </ul>

        <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </nav>
  )
}