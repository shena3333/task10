import './photo.css';
import React from 'react';
import foto1 from './1.bmp';
import foto2 from './2.bmp';
import foto3 from './3.bmp';
import foto4 from './4.bmp';
import foto5 from './5.bmp';

function Photo() {

    return (
        <>
            <div className='container-photo'>
                <div className='gallery-container'>
                    <p className='gallery'>Галерея работ:</p>
                </div>
                <div className="foto-box">
                    <img className="foto foto1" alt='icon' src={foto1} />
                    <img className="foto foto2" alt='icon' src={foto2} />
                    <img className="foto foto3" alt='icon' src={foto3} />
                    <img className="foto foto4" alt='icon' src={foto4} />
                    <img className="foto foto5" alt='icon' src={foto5} />
                </div>
            </div>
        </>
    )
}

export default Photo;