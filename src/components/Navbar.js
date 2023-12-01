import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import { Button, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../assests/donationlogo.png'
function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='navbar'>
      <div className='leftside'>
        <img src={logo} />
      </div>

      <div className='nav-links'>
        <Link to="/"> HOME </Link>
        <Link to="/about"> ABOUT </Link>
        <Link to="/events"> EVENTS </Link>
        <Link to="/history"> HISTORY </Link>
        <Link to="/contact"> CONTACT </Link>
      </div>

      <div className='menu-button'>
        <Button onClick={handleMenuOpen}>
          <ReorderIcon />
        </Button>
        <Menu
          id="menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem component={Link} to="/" onClick={handleMenuClose}>Home</MenuItem>
          <MenuItem component={Link} to="/about" onClick={handleMenuClose}>About</MenuItem>
          <MenuItem component={Link} to="/events" onClick={handleMenuClose}>Events</MenuItem>
          <MenuItem component={Link} to="/history" onClick={handleMenuClose}>History</MenuItem>
          <MenuItem component={Link} to="/contact" onClick={handleMenuClose}>Contact</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
