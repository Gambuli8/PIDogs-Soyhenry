import React from 'react';
import style from './navbar.module.css';
import { Link } from 'react-router-dom';
import Searchbar from '../SearchBar/Searchbar';

function NavBar() {
  return (
    <div>
      <nav className={style.navbar}>
        <div className={style.navbar_logo}>
        <Link to="/home" className={style.navbar_link}>
          <img src="https://static.vecteezy.com/system/resources/previews/009/551/676/original/shy-dog-logo-illustration-depicting-shy-dog-suitable-for-pet-company-free-vector.jpg" alt="" />
            </Link>
        </div>
        <div className={style.navbar_links}>
          <Link to="/home" className={style.navbar_link}>Home</Link>
          <Link to="/crear" className={style.navbar_link}>Create</Link>
          <Link to="/favoritos" className={style.navbar_link}>Favorite</Link>
          <Searchbar />
        </div>
      </nav>
    </div>
  )
}

export default NavBar;