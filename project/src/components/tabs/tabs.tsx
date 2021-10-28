type TabsProps = {
  ActiveTabs: number
  setActiveTabs: (value: number) => void
}


function Tabs({setActiveTabs, ActiveTabs}: TabsProps): JSX.Element {
  const handleSetTabsFilm = () => {
    setActiveTabs(0);
  };
  const handleSetTabsDetails = () => {
    setActiveTabs(1);
  };
  const handleSetTabsReviews = () => {
    setActiveTabs(2);
  };
  return (
    <ul className="film-nav__list">
      <li className={`film-nav__item ${ActiveTabs===0 ? 'film-nav__item--active' :' '}`}>
        <a className="film-nav__link" onClick={handleSetTabsFilm}>Overview</a>
      </li>
      <li className={`film-nav__item ${ActiveTabs===1 ? 'film-nav__item--active' :' '}`}>
        <a className="film-nav__link" onClick={handleSetTabsDetails}>Details</a>
      </li>
      <li className={`film-nav__item ${ActiveTabs===2 ? 'film-nav__item--active' :' '}`}>
        <a className="film-nav__link" onClick={handleSetTabsReviews}>Reviews</a>
      </li>
    </ul>
  );
}

export default Tabs;
