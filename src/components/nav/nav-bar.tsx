import React from 'react'
import { Link } from 'react-router-dom';
// import s from 'src/styles.module.scss'


const Navbar = () => {
  return <nav className=''>
    <div>
      <ul>
       <li><Link to="/">main</Link></li>
        <li><Link to="/tasks">tasks</Link></li>
        <li><Link to="/analytics">analytics</Link></li>
        <li><Link to="/settings">settings</Link></li>
      </ul>
    </div>

  </nav>
}


export default Navbar;