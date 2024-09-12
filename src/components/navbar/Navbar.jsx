import React, { useEffect, useState } from 'react'
import './navbar.scss'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useSelector } from 'react-redux';

export default function Navbar() {

  const [totalQuantity, setTotalQuantity] = useState(0)

  const [auth, setAuth] = useState(true)

  const handleAuth = () => {
    setAuth(!auth)
    setAnchorEl(null);
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
        <img src='/navbar-icon.jpeg' />
        <a href="/">Lumino Hosting</a>
      </div>

      <div className="right">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/servers">Servers</a></li>
          <li><a href="/cart">Cart <p>{totalQuantity}</p></a></li>
          <li><a href="/contact">Contact Us</a></li>
          {auth ? <li><a
            onClick={handleClick}
          >
            Profile
          </a>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
              style={{marginTop:'10px'}}
            >
              <MenuItem onClick={handleClose}><a href="/profile">Profile</a></MenuItem>
              <MenuItem onClick={handleClose}><a href="/profile/servers">My Servers</a></MenuItem>
              <MenuItem onClick={() => handleAuth()}>Logout</MenuItem>
            </Menu></li> : <li><a href="/login" onClick={() => handleAuth()}>Login</a></li>}
        </ul>
      </div>
    </nav>
  )
}
