import {Films} from '../../types/films';
import FilmCardDetails from '../film-card-details/film-card-details';

type FilmDetailsProps = {
  film: Films
}

function FilmDetails({film}: FilmDetailsProps): JSX.Element {
  const starring = film.starring.map((item) => item.concat('\r\n'));
  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <FilmCardDetails name={'Director'} value={film.director}/>
        <FilmCardDetails name={'Starring'} value={starring}/>
      </div>

      <div className="film-card__text-col">
        <FilmCardDetails name={'Run Time'} value={film.runTime}/>
        <FilmCardDetails name={'Genre'} value={film.genre}/>
        <FilmCardDetails name={'Released'} value={film.released}/>
      </div>
    </div>
  );
}

export default FilmDetails;
