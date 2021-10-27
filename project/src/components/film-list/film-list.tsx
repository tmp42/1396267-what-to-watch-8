import React from 'react';
import FilmCard from '../film-card/film-card';
import {Films} from '../../types/films';

type MainFilmProps = {
  films: Films[];
}

function FilmList({films}: MainFilmProps): JSX.Element {

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard key={film.id} film={film}/>
      ))}
    </div>
  );
}

export default FilmList;
