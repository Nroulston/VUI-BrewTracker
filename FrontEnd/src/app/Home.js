import React from 'react';
import {Link} from 'react-router-dom'
import NavBar from './NavBar'


const Home = () => {
  return (
    <>
    
    <NavBar />

      <Link  to='/login'>Log In</Link>
      <br></br>
      <Link to='/signup'>Sign Up</Link>
    </>
  );
};
export default Home;
