import React, {memo, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Film} from '../../../types/films';
import {APIRoute, AuthorizationStatus} from '../../../const';
import {useApi} from '../../../store/api-actions';
import {getAuthorizationStatus} from '../../../store/user-data/selector';
import {useSelector} from 'react-redux';

type FilmButtonProps = {
  idFilm: number,
  isFavourite: boolean,
  isDetailed?: boolean
}

function FilmButton({idFilm, isFavourite, isDetailed}: FilmButtonProps): JSX.Element {
  const api = useApi();
  const [activeFavourite, setActiveFavourite] = useState(isFavourite);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const onClick = () => {
    api.post<Film>(APIRoute.ChangeFavouriteFilm.replace(':id', idFilm.toString()).replace(':status', Number(!activeFavourite).toString()))
      .then((data) => setActiveFavourite(data.data.is_favorite));
  };

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.NoAuth) {
      setActiveFavourite(false);
    }
  }, [authorizationStatus]);

  useEffect(() => {
    setActiveFavourite(isFavourite);
  }, [isFavourite]);

  return (
    <div className="film-card__buttons">
      <Link className="btn btn--play film-card__button" to={`/player/${idFilm}`}>
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"/>
        </svg>
        <span>Play</span>
      </Link>
      <button className="btn btn--list film-card__button" type="button" onClick={onClick}>
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref={activeFavourite ? '#checkmark' : '#add'}/>
        </svg>
        <span>My list</span>
      </button>
      {!isDetailed && authorizationStatus === AuthorizationStatus.Auth ?
        <Link className="btn film-card__button" to={`/films/${idFilm}/review`}>Add review</Link>
        :
        <>
        </>}
    </div>
  );
}

export default memo(FilmButton);
