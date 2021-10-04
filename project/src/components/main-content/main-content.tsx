import FilmCard from '../film-card/film-card';

type MainFilmProps={
  genre: string;
  release: number;
  promo: string;
}

function MainContent({genre,release,promo}:MainFilmProps): JSX.Element {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promo}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{release}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Kids & Family</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Thrillers</a>
            </li>
          </ul>

          <div className="catalog__films-list">
            <FilmCard filmImage={'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'} filmName={'Fantastic Beasts: The Crimes of Grindelwald'}/>
            <FilmCard filmImage={'img/bohemian-rhapsody.jpg'} filmName={'Bohemian Rhapsody'}/>
            <FilmCard filmImage={'img/macbeth.jpg'} filmName={'Macbeth'}/>
            <FilmCard filmImage={'img/aviator.jpg'} filmName={'Aviator'}/>
            <FilmCard filmImage={'img/we-need-to-talk-about-kevin.jpg'} filmName={'We need to talk about Kevin'}/>
            <FilmCard filmImage={'img/what-we-do-in-the-shadows.jpg'} filmName={'What We Do in the Shadows'}/>
            <FilmCard filmImage={'img/revenant.jpg'} filmName={'Revenant'}/>
            <FilmCard filmImage={'img/johnny-english.jpg'} filmName={'Johnny English'}/>
            <FilmCard filmImage={'img/shutter-island.jpg'} filmName={'Shutter Island'}/>
            <FilmCard filmImage={'img/pulp-fiction.jpg'} filmName={'Pulp Fiction'}/>
            <FilmCard filmImage={'img/no-country-for-old-men.jpg'} filmName={'No Country for Old Men'}/>
            <FilmCard filmImage={'img/snatch.jpg'} filmName={'Snatch'}/>
            <FilmCard filmImage={'img/moonrise-kingdom.jpg'} filmName={'Moonrise Kingdom'}/>
            <FilmCard filmImage={'img/seven-years-in-tibet.jpg'} filmName={'Seven Years in Tibet'}/>
            <FilmCard filmImage={'img/midnight-special.jpg'} filmName={'Midnight Special'}/>
            <FilmCard filmImage={'img/war-of-the-worlds.jpg'} filmName={'War of the Worlds'}/>
            <FilmCard filmImage={'img/dardjeeling-limited.jpg'} filmName={'Dardjeeling Limited'}/>
            <FilmCard filmImage={'img/orlando.jpg'} filmName={'Orlando'}/>
            <FilmCard filmImage={'img/mindhunter.jpg'} filmName={'Mindhunter'}/>
            <FilmCard filmImage={'img/midnight-special.jpg'} filmName={'Midnight Special'}/>
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MainContent;
