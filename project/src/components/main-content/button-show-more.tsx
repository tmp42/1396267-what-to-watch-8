import {useDispatch} from 'react-redux';
import {changeAddFilm} from '../../store/action';
import {FIRST_COUNT_FILM} from '../../const';

function ButtonShowMore(): JSX.Element {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(changeAddFilm(FIRST_COUNT_FILM));
  };

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onClick}>Show more</button>
    </div>
  );
}

export default ButtonShowMore;
