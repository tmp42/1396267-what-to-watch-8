import {Films} from '../../types/films';

type FilmInfoProps = {
  film: Films
}

function FilmInfo({film}: FilmInfoProps): JSX.Element {
  const Starring = film.starring.map((item) => item.concat(', '));
  const evaluations = ['Bad', 'Normal', 'Good', 'Very good', 'Awesome'];
  let evaluation: string = '';
  if (film.rating <= 3) {
    evaluation = evaluations[0];
  } else if (film.rating <= 5) {
    evaluation = evaluations[1];
  } else if (film.rating <= 8) {
    evaluation = evaluations[2];
  } else if (film.rating < 10) {
    evaluation = evaluations[3];
  } else {
    evaluation = evaluations[4];

  }
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{evaluation}</span>
          <span className="film-rating__count">{film.scores_count} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        {film.description}
        <p className="film-card__director"><strong>Director: {film.director}</strong></p>
        <p className="film-card__starring">
          <strong> Starring :{Starring}</strong>
        </p>
      </div>
    </>
  );
}

export default FilmInfo;
