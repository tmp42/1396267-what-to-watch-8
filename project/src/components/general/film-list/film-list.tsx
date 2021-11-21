import React from 'react';
import FilmCard from '../film-card/film-card';
import {Film} from '../../../types/films';

type MainFilmProps = {
  films: Film[];
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
