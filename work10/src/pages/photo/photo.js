import './photo.css';
import React from 'react';
import foto1 from './1.bmp';
import foto2 from './2.bmp';
import foto3 from './3.bmp';
import foto4 from './4.bmp';


function Photo() {

    // const mainFoto = document.querySelector('.main-foto');
    // document.addEventListener('mouseover', function (e) {
    //     if (e.target.closest('.foto')) {
    //         mainFoto.src = e.target.src;
    //     }
    // });

    return (
        <>
            <div className='container-photo'>
                <div className='gallery-container'>
                    <p className='gallery'>Галерея работ:</p>
                </div>
                {/* <div><img className='main-foto' src={foto1} alt="main-image" /></div> */}
                <div className="foto-box">
                    <img className="foto foto1" alt='icon' src={foto1} />
                    <img className="foto foto2" alt='icon' src={foto2} />
                    <img className="foto foto3" alt='icon' src={foto3} />
                    <img className="foto foto4" alt='icon' src={foto4} />
                </div>
            </div>
        </>
    )
}

// function PhotoFunc() {

//     const mainFoto = document.querySelector('.main-foto');
//     document.addEventListener('mouseover', function (e) {
//         if (e.target.closest('.foto')) {
//             mainFoto.src = e.target.src;
//         }
//     });

   
// }

// PhotoFunc()

export default Photo;