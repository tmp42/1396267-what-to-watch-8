import FilmList from '../../general/film-list/film-list';
import GenreList from './genres-list';
import {useDispatch, useSelector} from 'react-redux';
import ButtonShowMore from './button-show-more';
import {memo, useEffect} from 'react';
import {resetGenreFilm} from '../../../store/action';
import HeaderMainContent from './header-main-content';
import Footer from '../../general/footer/footer';
import {getCountMovie, getCurrentGenre, getMovies} from '../../../store/film-data/selector';

function MainContent(): JSX.Element {
  const films = useSelector(getMovies);
  const selectGenre = useSelector(getCurrentGenre);
  const countFilm = useSelector(getCountMovie);
  const filterGenre = films.filter((movie) => movie['genre'] === selectGenre || selectGenre === 'All genres');
  const countFilterFilm = filterGenre.length;
  const filterMovies = filterGenre.slice(0, countFilm);
  const dispatch = useDispatch();

  useEffect(() => () => {
    dispatch(resetGenreFilm());
  }, [dispatch]);

  return (
    <>
      <HeaderMainContent/>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList/>
          <FilmList films={filterMovies}/>
          {countFilm < countFilterFilm && <ButtonShowMore/>}
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default memo(MainContent);
