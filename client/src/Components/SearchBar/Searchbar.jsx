import React from 'react';
import style from './Searchbar.module.css';

function Searchbar() {
  return (
    <div className={style.container}>
        <input type="text" placeholder="Search..." />
    </div>
  )
}

export default Searchbar;