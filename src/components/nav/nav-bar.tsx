import React from 'react'
import { Link } from 'react-router-dom';
import style from './style.module.scss'


const Navbar = () => {
  return <nav className={style.nav_menu}>
    <div>
      <ul>
        <li> >> </li>
       <Link to="/"><li>main</li></Link>
        <li><Link to="/tasks">tasks</Link></li>
        <li><Link to="/analytics">analytics</Link></li>
        <li><Link to="/settings">settings</Link></li>
      </ul>
    </div>

  </nav>
}


export default Navbar;