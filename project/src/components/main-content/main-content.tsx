import FilmList from '../film-list/film-list';
import Logo from '../logo/logo';
import GenreList from './genres-list';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {State} from '../../types/state';
import ButtonShowMore from './button-show-more';
import {useEffect} from 'react';
import {resetGenreFilm} from '../../store/action';
import {Film} from '../../types/films';
import HeaderMainContent from './header-main-content';

function MainContent(): JSX.Element {
  const films =  useSelector<State, Film[]>((store) => store.filmList);
  const {selectGenre, countFilm} = useSelector<State, { selectGenre: string, countFilm: number }>((store) => ({
    selectGenre: store.genre,
    countFilm: store.countFilm,
  }), shallowEqual);
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

        <footer className="page-footer">
          <Logo/>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MainContent;
