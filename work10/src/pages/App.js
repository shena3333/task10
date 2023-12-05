import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <div className='title-container'>
          <p className='title'>Добро пожаловать на сайт начинающего frontend-разработчика.</p>
        </div>
        <section className='content'>

          <div class="text-abou-me">
            <p>Меня зовут Кондрикова Елена.</p>
            <p>Являюсь выпускником курса "Веб-дизайн и разработка сайтов" и освоила:</p>
            <ul>
              <li>создане макетов с помощью Figma;</li>
              <li>верстка страницы (HTML,CSS);</li>
              <li>разработка страницы с помощью JS;</li>
              <li>создание отзывчивого дизана страницы; </li>
              <li>создание сайта на основе CMS;</li>
              <li>создание сайта c помощью фреймворка React;</li>
              <li>контроль версий при помощи github;</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
