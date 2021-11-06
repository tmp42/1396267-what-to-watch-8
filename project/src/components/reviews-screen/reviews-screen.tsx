import {Film} from '../../types/films';
import AddReview from '../add-review/add-review';
import {useParams} from 'react-router-dom';
import Logo from '../logo/logo';
import {useSelector} from 'react-redux';
import {State} from '../../types/state';
import LoginButton from '../login-button/login-button';

function ReviewsScreen(): JSX.Element {
  const reviewsFilm = useSelector<State, Film[]>((store) => store.filmList as Film[]);
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
                <a href="film-page.html" className="breadcrumbs__link">The Grand Budapest Hotel</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" href=" #">Add review</a>
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

export default ReviewsScreen;
