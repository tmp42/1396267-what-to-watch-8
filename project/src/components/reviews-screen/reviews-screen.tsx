import {Films} from '../../types/films';
import AddReview from '../add-review/add-review';
import {useParams} from 'react-router-dom';
import Logo from '../logo/logo';

type ReviewsScreenProps = {
  reviewsFilm: Films[];
}

function ReviewsScreen({reviewsFilm}: ReviewsScreenProps): JSX.Element {

  const id = parseInt(useParams<{ id: string }>().id, 10);
  const film = reviewsFilm.find((x) => x.id === id) as Films;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name}/>
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

        <div className="film-card__poster film-card__poster--small">
          <img src={film.previewImage} alt={film.name} width="218" height="327"/>
        </div>
      </div>
      <AddReview/>
    </section>
  );
}

export default ReviewsScreen;
