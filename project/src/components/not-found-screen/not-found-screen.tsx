import {Link} from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <section className="game">
      <header className="game__header">
        <Link className="logo__link" to="/">
          <span className="visually-hidden">Вернуться на главную</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
        </Link>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370" style={{filter: 'url(#blur)', transform: 'rotate(-90deg) scaleY(-1)', transformOrigin: 'center'}}/>
        </svg>
      </header>

      <section className="game__screen">
        <h1>404. Page not found</h1>
        <a href="/">Вернуться на главную</a>
      </section>
    </section>
  );
}

export default NotFoundScreen;
