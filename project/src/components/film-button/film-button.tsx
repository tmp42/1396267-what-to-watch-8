import React, {memo} from 'react';
import {Link} from 'react-router-dom';
import {Film} from '../../types/films';
import {APIRoute} from '../../const';
import {useApi} from '../../store/api-actions';

type FilmButtonProps = {
  idFilm: number,
  isFavourite: boolean,
  isDetailed?: boolean
}

function FilmButton({idFilm, isFavourite, isDetailed}: FilmButtonProps): JSX.Element {
  const api = useApi();
  let [activeFavourite, setActiveFavourite] = React.useState(isFavourite);
  const onclick = () => {
    api.post<Film[]>(APIRoute.ChangeFavouriteFilm.replace(':id', idFilm.toString()).replace(':status', Number(!activeFavourite).toString()))
      .then(() => setActiveFavourite(activeFavourite = !activeFavourite));
  };

  return (
    <div className="film-card__buttons">
      <Link className="btn btn--play film-card__button" to={`/player/${idFilm}`}>
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"/>
        </svg>
        <span>Play</span>
      </Link>
      <button className="btn btn--list film-card__button" type="button" onClick={onclick}>
        {activeFavourite ?
          <svg width="19" height="20" viewBox="0 0 19 20" style={{fill: '#ffffff'}}>
            <path d="M10.5,14.7928932 L17.1464466,8.14644661 C17.3417088,7.95118446 17.6582912,7.95118446 17.8535534,8.14644661 C18.0488155,8.34170876 18.0488155,8.65829124 17.8535534,8.85355339 L10.8535534,15.8535534 C10.6582912,16.0488155 10.3417088,16.0488155 10.1464466,15.8535534 L7.14644661,12.8535534 C6.95118446,12.6582912 6.95118446,12.3417088 7.14644661,12.1464466 C7.34170876,11.9511845 7.65829124,11.9511845 7.85355339,12.1464466 L10.5,14.7928932 Z"/>
          </svg>
          :
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"/>
          </svg>}
        <span>My list</span>
      </button>
      {!isDetailed ?
        <Link className="btn film-card__button" to={`/films/${idFilm}/review`}>Add review</Link>
        :
        <>
        </>}
    </div>
  );
}

export default memo(FilmButton);
