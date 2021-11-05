import {Link} from 'react-router-dom';
import FilmList from '../film-list/film-list';
import Logo from '../logo/logo';
import GenreList from './genres-list';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {State} from '../../types/state';
import ButtonShowMore from './button-show-more';
import {useEffect} from 'react';
import {resetGenreFilm} from '../../store/action';
import {Films} from '../../types/films';
import LoginButton from '../login-button/login-button';

function MainContent(): JSX.Element {
  const films =  useSelector<State, Films[]>((store) => store.filmList);
  const firstContent = films[0];
  const {selectGenre, countFilm} = useSelector<State, { selectGenre: string, countFilm: number }>((store) => ({
    selectGenre: store.genre,
    countFilm: store.countFilm,
  }), shallowEqual);
  const filterGenre = films.filter((movie) => movie['genre'] === selectGenre || selectGenre === 'All genres');
  const countFilterFilm = filterGenre.length;
  const filterMovies = filterGenre.slice(0, countFilm);
  const dispatch = useDispatch();

  useEffect(() => () => {
    dispatch(resetGenreFilm());
  }, []);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={firstContent.background_image} alt={firstContent.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo/>

          <LoginButton/>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={firstContent.preview_image} alt={firstContent.name} width="218" height="327"/>
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
