import {Films} from '../../types/films';
import FilmCardDetails from '../film-card-details/film-card-details';

type FilmDetailsProps = {
  film: Films
}

function FilmDetails({film}: FilmDetailsProps): JSX.Element {
  const hours = Math.trunc(film.run_time / 60);
  const minutes = film.run_time % 60;
  const time = hours + 'h ' + minutes + 'm.';
  const starring = film.starring.map((item) => item.concat('\r\n'));
  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <FilmCardDetails name={'Director'} value={film.director}/>
        <FilmCardDetails name={'Starring'} value={starring}/>
      </div>

      <div className="film-card__text-col">
        <FilmCardDetails name={'Run Time'} value={time}/>
        <FilmCardDetails name={'Genre'} value={film.genre}/>
        <FilmCardDetails name={'Released'} value={film.released}/>
      </div>
    </div>
  );
}

export default FilmDetails;
