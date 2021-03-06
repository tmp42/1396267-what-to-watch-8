import {Film} from '../../../types/films';
import AddReview from '../add-review/add-review';
import {Link, useParams} from 'react-router-dom';
import Logo from '../../general/logo/logo';
import {useSelector} from 'react-redux';
import LoginButton from '../../login-page/login-button/login-button';
import {getMovies} from '../../../store/film-data/selector';
import {memo} from 'react';

function ReviewsScreen(): JSX.Element {
  const reviewsFilm = useSelector(getMovies);
  const id = parseInt(useParams<{ id: string }>().id, 10);
  const film = reviewsFilm.find((x) => x.id === id) as Film;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.background_image} alt={film.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={`/films/${film.id}`}>{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={`/films/${film.id}/review`}>Add review</Link>
              </li>
            </ul>
          </nav>
          <LoginButton/>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.preview_image} alt={film.name} width="218" height="327"/>
        </div>
      </div>
      <AddReview/>
    </section>
  );
}

export default memo(ReviewsScreen);
