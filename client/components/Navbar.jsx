import React from 'react';
import { Link } from 'react-router-dom';
// import { FaTimes, FaBars } from 'react-icons/fa'; // can also use the 'x' and hamburger icons from the React Icons library

const Navbar = () => {
  return (
    <div>
      <div className='sidebar'></div>
      //{' '}
      <div className='sidebar' style={{ width: isNavOpen ? '250px' : '0' }}>
        <Link className='close-btn' to='#'>
          {/* <Link className='close-btn' to='#' onClick={handleSidebarBtn}></Link> */}
          X
        </Link>

        <Link className='nav-title' to='/'>
          Home
        </Link>
        <Link className='nav-title' to='/level-1'>
          Level 1
        </Link>
        <Link className='nav-title' to='/score'>
          Score Board
        </Link>
      </div>
      {/* <button className='open-btn' onClick={handleSidebarBtn}> */}
      <button className='open-btn'>&#9776; Open Sidebar</button>
    </div>
  );
};

export default Navbar;
