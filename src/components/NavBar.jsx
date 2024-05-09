import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css'; 

function NavBar() {
    const navigate = useNavigate();
  return (
    <nav className="nav-bar">
        <h3 onClick={()=> navigate('/')}>Yacht Shoppers</h3>
        <Link to='/' >Home</Link>
        <Link to='/customers' >Customers</Link>
        <Link to='/add-customer' >Add Customers</Link>
    </nav>
  )
}

export default NavBar
