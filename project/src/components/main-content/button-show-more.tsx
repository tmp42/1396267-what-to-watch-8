import {useDispatch, useSelector} from 'react-redux';
import {State} from '../../types/state';
import {changeAddFilm} from '../../store/action';
import {FIRST_COUNT_FILM} from '../../const';

function ButtonShowMore(): JSX.Element {
  const firstCountFilm = Number(useSelector<State>((store) => store.countFilm));
  const changeCountFilm = firstCountFilm + FIRST_COUNT_FILM;
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(changeAddFilm(changeCountFilm));
  };

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onClick}>Show more</button>
    </div>
  );
}

export default ButtonShowMore;
