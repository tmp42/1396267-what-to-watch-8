import {PropsWithChildren} from 'react';

type TabsProps = PropsWithChildren<{
  activeTabs: number
  onChange: (value: number) => void
}>;


function Tabs({onChange, activeTabs}: TabsProps): JSX.Element {
  const nameTabs = ['Overview', 'Details', 'Reviews'];

  return (
    <div className="film-card__desc">
      <ul className="film-nav__list">
        {nameTabs.map((item, i) => (
          <li className={`film-nav__item ${activeTabs === i ? 'film-nav__item--active' : ' '}`} onClick={() => onChange(i)} key={Math.random()}>
            <p className={'film-nav__link'}>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tabs;
