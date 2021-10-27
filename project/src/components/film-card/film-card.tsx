import {Link} from 'react-router-dom';
import {Films} from '../../types/films';

type FilmCardProps = {
  film: Films;
}

function FilmCard({film}: FilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={film.previewImage} alt={film.name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>
          <p className="small-film-card__link">{film.name}</p>
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
