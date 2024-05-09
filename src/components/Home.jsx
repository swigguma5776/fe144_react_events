import React from 'react';

// internal imports
import NavBar from './NavBar';
import '../App.css';

function Home() {
  return (
    <div className='home-page'>
        <NavBar />
        <h1>Welcome to our Super Cool Shopping App</h1>
        <p>Where prices are fair and inflation hasn't quite hit us yet! You are welcome!</p>
    </div>
  )
}

export default Home
