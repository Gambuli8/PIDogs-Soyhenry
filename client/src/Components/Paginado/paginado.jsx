import React, {useState} from 'react';
import style from './paginado.module.css';


 function Paginado ({currentPage, setCurrentPage, maxPage}) {

    const [inputt, setInputt] = useState (1);

    const nextPage = () => {
        setInputt(inputt + 1);
        setCurrentPage(currentPage + 1);
    };

    const beforepage = () => {
        setInputt(inputt - 1);
        setCurrentPage(currentPage - 1);
    };

    return (
        <div className={style.container}>
            <button onClick={beforepage} disabled={currentPage === maxPage } >Anterior</button>
            <input name='page' autoComplete='off' value={inputt} />
            <p>De {maxPage}</p>
            <button onClick={nextPage} disabled={currentPage === maxPage} >Siguiente</button>

        </div>
    )
   
};

export default Paginado;