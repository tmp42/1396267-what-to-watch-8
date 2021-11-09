import FilmList from '../film-list/film-list';
import Logo from '../logo/logo';
import LoginButton from '../login-button/login-button';
import Footer from '../footer/footer';
import {memo, useEffect, useState} from 'react';
import {useApi} from '../../store/api-actions';
import {Film} from '../../types/films';
import {APIRoute} from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';

function FavouriteFilmScreen(): JSX.Element {
  const api = useApi();
  const [{favouriteMovies}, setState] = useState({favouriteMovies: null as Film[] | null});

  useEffect(() => {
    api.get<Film[]>(APIRoute.FavouriteFilm).then(({data}) => setState((state) => ({
      ...state, favouriteMovies: data,
    })));
  }, [api]);

  if (!favouriteMovies) {
    return <LoadingScreen/>;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">My list</h1>
        <LoginButton/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmList films={favouriteMovies}/>
      </section>
      <Footer/>
    </div>
  );
}

export default memo(FavouriteFilmScreen);
