import React from 'react';
import FilmCard from '../film-card/film-card';
import {Films} from '../../types/films';

type MainFilmProps = {
  films: Films;
}

function FilmList(props: MainFilmProps): JSX.Element {
  const {films} = props;

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard key={film.id} filmImage={film.previewImage} filmName={film.name} id={film.id}/>
      ))}
    </div>
  );
}

export default FilmList;
