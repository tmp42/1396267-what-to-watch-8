type TabsProps = {
  activeTabs: number
  onChange: (value: number) => void
}


function Tabs({onChange, activeTabs}: TabsProps): JSX.Element {
  const handleSetTabsFilm = () => {
    onChange(0);
  };
  const handleSetTabsDetails = () => {
    onChange(1);
  };
  const handleSetTabsReviews = () => {
    onChange(2);
  };
  return (
    <div className="film-card__desc">
      <ul className="film-nav__list">
        <li className={`film-nav__item ${activeTabs === 0 ? 'film-nav__item--active' : ' '}`}>
          <a className="film-nav__link" onClick={handleSetTabsFilm}>Overview</a>
        </li>
        <li className={`film-nav__item ${activeTabs === 1 ? 'film-nav__item--active' : ' '}`}>
          <a className="film-nav__link" onClick={handleSetTabsDetails}>Details</a>
        </li>
        <li className={`film-nav__item ${activeTabs === 2 ? 'film-nav__item--active' : ' '}`}>
          <a className="film-nav__link" onClick={handleSetTabsReviews}>Reviews</a>
        </li>
      </ul>
    </div>
  );
}

export default Tabs;
