import {Film} from '../../types/films';
import Tabs from '../tabs/tabs';
import {memo, useEffect, useState} from 'react';
import FilmInfo from '../film-info/film-info';
import FilmDetails from '../film-details/film-details';
import FilmReviews from '../film-reviews/film-reviews';
import FilmList from '../film-list/film-list';
import Logo from '../logo/logo';
import {Comment} from '../../types/comments';
import LoadingScreen from '../loading-screen/loading-screen';
import {useApi} from '../../store/api-actions';
import {APIRoute} from '../../const';
import LoginButton from '../login-button/login-button';
import Footer from '../footer/footer';
import FilmButton from '../film-button/film-button';
import {useParams} from 'react-router-dom';

function FilmScreen(): JSX.Element {
  const [activeTabs, onChange] = useState(0);
  const id = parseInt(useParams<{ id: string }>().id, 10);
  const api = useApi();
  const [{isLoading, film, comments, similarMovies}, setState] = useState({
    isLoading: true,
    film: null as Film | null,
    comments: [] as Comment[],
    similarMovies: [] as Film[],
  });

  useEffect(() => {
    Promise.all([
      api.get<Film>(APIRoute.Film.replace(':id', id.toString())).then(({data}) => setState((state) => ({
        ...state, film: data,
      }))),
      api.get<Comment[]>(APIRoute.Comments.replace(':id', id.toString())).then(({data}) => setState((state) => ({
        ...state, comments: data,
      }))),
      api.get<Film[]>(APIRoute.SimilarFilm.replace(':id', id.toString())).then(({data}) => setState((state) => ({
        ...state, similarMovies: data,
      }))),
    ]).then(() => setState((state) => ({...state, isLoading: false})));
  }, [api, id]);

  if (isLoading || !film) {
    return <LoadingScreen/>;
  }
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.background_image} alt={film.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo/>
            <LoginButton/>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>
              <FilmButton idFilm={id} isFavourite={film?.is_favorite}/>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.preview_image} alt={film.name} width="218" height="327"/>
            </div>
            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <Tabs activeTabs={activeTabs} onChange={onChange}/>
              </nav>
              {(activeTabs === 0) && <FilmInfo film={film}/>}
              {(activeTabs === 1) && <FilmDetails film={film}/>}
              {(activeTabs === 2) && <FilmReviews comments={comments}/>}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmList films={similarMovies}/>
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default memo(FilmScreen);
