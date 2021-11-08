import FilmList from '../film-list/film-list';
import Logo from '../logo/logo';
import {useSelector} from 'react-redux';
import LoginButton from '../login-button/login-button';
import Footer from '../footer/footer';
import {getMovies} from '../../store/film-data/selector';
import {memo} from 'react';

function FavouriteFilmScreen(): JSX.Element {
  const favouriteFilm = useSelector(getMovies);
  const favouriteMovies = favouriteFilm.filter((movie) => movie['is_favorite']);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">My list</h1>
        <LoginButton/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <FilmList films={favouriteMovies}/>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default memo(FavouriteFilmScreen);
