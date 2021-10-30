import {useDispatch, useSelector} from 'react-redux';
import {State} from '../../types/state';
import {changeGenreAction} from '../../store/action';

type GenreListItemProps = {
  name: string
  active: boolean
  onClick: () => void
}

const listGenre = [{name: 'All genres'},
  {name: 'Comedies'},
  {name: 'Crime'},
  {name: 'Documentary'},
  {name: 'Dramas'},
  {name: 'Horror'},
  {name: 'Romance'},
  {name: 'Sci-Fi'},
  {name: 'Thrillers'}];


function GenreListItem({name, active, onClick}: GenreListItemProps): JSX.Element {
  return (
    <li className={`catalog__genres-item ${active ? 'catalog__genres-item--active' : ''}`} onClick={onClick}>
      <span className="catalog__genres-link">{name}</span>
    </li>
  );
}

function GenreList(): JSX.Element {
  const selectGenre = useSelector<State>((store) => store.genre);
  const dispatch = useDispatch();

  const onClick = (code: string) => {
    dispatch(changeGenreAction(code));
  };

  return (
    <ul className="catalog__genres-list">
      {listGenre.map((genre) => (
        <GenreListItem key={Math.random()} name={genre.name} active={genre.name === selectGenre} onClick={() => onClick(genre.name)}/>
      ))}
    </ul>
  );
}

export default GenreList;
