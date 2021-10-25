import {Link} from 'react-router-dom';

type FilmCardProps = {
  filmImage: string;
  filmName: string;
  id: number;
}

function FilmCard({filmImage, filmName, id}: FilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={filmImage} alt={filmName} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>
          <p className="small-film-card__link">{filmName}</p>
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
