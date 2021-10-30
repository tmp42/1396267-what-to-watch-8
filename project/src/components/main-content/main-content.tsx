import {Link} from 'react-router-dom';
import FilmList from '../film-list/film-list';
import {Films} from '../../types/films';
import Logo from '../logo/logo';
import GenreList from './genres-list';
import {useSelector} from 'react-redux';
import {State} from '../../types/state';
import ButtonShowMore from './button-show-more';

type MainFilmProps = {
  films: Films[];
}

function MainContent({films}: MainFilmProps): JSX.Element {
  const firstContent = films[0];
  const selectGenre = useSelector<State>((store) => store.genre);
  const countFilm = Number(useSelector<State>((store) => store.countFilm));
  const countFilterFilm = films.filter((movie) => movie['genre'] === selectGenre || selectGenre === 'All genres').length;
  const filterMovies = films.filter((movie) => movie['genre'] === selectGenre || selectGenre === 'All genres').slice(0, countFilm);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo/>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link" href=" #">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{firstContent.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{firstContent.genre}</span>
                <span className="film-card__year">{firstContent.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link className="btn btn--play film-card__button" to={`/player/${films[0].id}`}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList/>
          <FilmList films={filterMovies}/>
          {countFilm < countFilterFilm && <ButtonShowMore/>}
        </section>

        <footer className="page-footer">
          <Logo/>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MainContent;
