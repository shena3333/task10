import './photo.css';
import React from 'react';
import foto1 from './1.bmp';
import foto2 from './2.bmp';
import foto3 from './3.bmp';
import foto4 from './4.bmp';
import foto5 from './5.bmp';

function Photo() {

    setTimeout(() => {
        photoFunc();
    }, 1000)

    return (
        <>
            <div className='container-photo'>
                <div className='gallery-container'>
                    <p className='gallery'>Галерея работ:</p>
                </div>
                <div>
                    <img className='main-foto' src={foto1} alt="main-image" />
                </div>
                <div className="foto-box">
                    <img className="foto" alt='icon' src={foto1} />
                    <img className="foto" alt='icon' src={foto2} />
                    <img className="foto" alt='icon' src={foto3} />
                    <img className="foto" alt='icon' src={foto4} />
                    <img className="foto" alt='icon' src={foto5} />
                </div>
            </div>

        </>
    )
}

function photoFunc() {

    // вывод фото как главного при наведении
    const mainFoto = document.querySelector('.main-foto');
    document.addEventListener("mouseover", function (e) {
        if (e.target.closest('.foto')) {
            mainFoto.src = e.target.src;
        }
    });
    // вывод фото как главного при наведении конец
}

export default Photo;