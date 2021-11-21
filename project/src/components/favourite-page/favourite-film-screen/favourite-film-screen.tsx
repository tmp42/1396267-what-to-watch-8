import FilmList from '../../general/film-list/film-list';
import Logo from '../../general/logo/logo';
import LoginButton from '../../login-page/login-button/login-button';
import Footer from '../../general/footer/footer';
import {memo, useEffect, useState} from 'react';
import {useApi} from '../../../store/api-actions';
import {Film} from '../../../types/films';
import {APIRoute} from '../../../const';
import LoadingScreen from '../../general/loading-screen/loading-screen';

function FavouriteFilmScreen(): JSX.Element {
  const api = useApi();
  const [favoriteMovies, setState] = useState<Film[] | null>(null);

  useEffect(() => {
    api.get<Film[]>(APIRoute.FavoriteFilm).then((data) => setState(data.data));
  }, [api]);

  if (!favoriteMovies) {
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
        <FilmList films={favoriteMovies}/>
      </section>
      <Footer/>
    </div>
  );
}

export default memo(FavouriteFilmScreen);
