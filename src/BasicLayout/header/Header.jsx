import React from 'react'
import '../LayoutStyle.css';
import {Link} from 'react-router-dom';


const Header = () => {
  return (
    <div className='header-box'>
      {/* <h1>React Revision Website</h1> */}
      <Link to='/' className='nav-item'>Home</Link>
      <Link to='/ref' className='nav-item'>UseRef Expl</Link>
      <Link to='/reducer' className='nav-item'>useReducer</Link>
      <Link to='/crud' className='nav-item'>Todo-useState</Link>
      <Link to='/todo' className='nav-item'>Todo-useReducer</Link>
      <Link to='/game' className='nav-item'>TicTacGame</Link>
    </div>
  )
}

export default Header;
