import './portfolio.css';
import React from 'react';

function Portfolio() {

    return (
        <div className='portfolio-container'>
            <p>Можно посмотреть примеры моих работ на Git:</p>
            <ul>
                <li>
                    <a href="https://github.com/shena3333/project3Kondrikova">Первый пример</a>
                </li>
                <li>
                    <a href="https://github.com/shena3333/task10">Второй пример</a>
                </li>
                <li>
                    <a href="https://github.com/shena3333/calc">Третий пример</a>
                </li>
            </ul>

        </div>

    )
}

export default Portfolio;