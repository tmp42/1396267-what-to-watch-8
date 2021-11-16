import {useDispatch, useSelector} from 'react-redux';
import {changeGenreAction} from '../../store/action';
import {getCurrentGenre, getMovies} from '../../store/film-data/selector';
import {memo} from 'react';

type GenreListItemProps = {
  name: string
  active: boolean
  onClick: () => void
}


function GenreListItem({name, active, onClick}: GenreListItemProps): JSX.Element {
  return (
    <li className={`catalog__genres-item ${active ? 'catalog__genres-item--active' : ''}`} onClick={onClick}>
      <span className="catalog__genres-link">{name}</span>
    </li>
  );
}

function GenreList(): JSX.Element {
  const selectGenre = useSelector(getCurrentGenre);
  const dispatch = useDispatch();

  const films = useSelector(getMovies);
  const listGenre = films.map((film) => film.genre);
  const uniqeFilmsGenres = [...new Set(listGenre)];
  uniqeFilmsGenres.unshift('All genres');

  const onClick = (code: string) => {
    dispatch(changeGenreAction(code));
  };

  return (
    <ul className="catalog__genres-list">
      {uniqeFilmsGenres.map((genre) => (
        <GenreListItem key={Math.random()} name={genre} active={genre === selectGenre} onClick={() => onClick(genre)}/>
      ))}
    </ul>
  );
}

export default memo(GenreList);
