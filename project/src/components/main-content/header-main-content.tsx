import Logo from '../logo/logo';
import LoginButton from '../login-button/login-button';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {useApi} from '../../store/api-actions';
import {Film} from '../../types/films';
import {APIRoute} from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';

function HeaderMainContent() {
  const api = useApi();
  const [{promoMovies}, setState] = useState({promoMovies: null as Film | null});

  useEffect(() => {
    api.get<Film>(APIRoute.Promo).then(({data}) => setState((state) => ({
      ...state, promoMovies: data,
    })));
  });

  if (!promoMovies) {
    return <LoadingScreen/>;
  }

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={promoMovies.background_image} alt={promoMovies.name}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <Logo/>

        <LoginButton/>
      </header>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={promoMovies.preview_image} alt={promoMovies.name} width="218" height="327"/>
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{promoMovies.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{promoMovies.genre}</span>
              <span className="film-card__year">{promoMovies.released}</span>
            </p>

            <div className="film-card__buttons">
              <Link className="btn btn--play film-card__button" to={`/player/${promoMovies.id}`}>
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
  );
}

export default HeaderMainContent;
