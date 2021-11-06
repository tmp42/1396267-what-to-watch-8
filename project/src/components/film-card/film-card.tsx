import {Link, useHistory} from 'react-router-dom';
import {Film} from '../../types/films';
import {useState} from 'react';
import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  film: Film;
}

function FilmCard({film}: FilmCardProps): JSX.Element {
  const history = useHistory();
  const [isActive, setActiveState] = useState(false);
  const [timeoutHandle, setTimeoutHandleState] = useState<number | null>(null);

  const onMouseEnterFilmHandler = (): void => {
    setTimeoutHandleState(window.setTimeout(() => setActiveState(true), 1000));
  };

  const onMouseLeaveFilmHandler = (): void => {
    if (timeoutHandle) {
      window.clearTimeout(timeoutHandle);
      setTimeoutHandleState(null);
      setActiveState(false);
    }
  };

  return (
    <article
      onClick={() => history.push(`/films/${film.id}`)}
      onMouseEnter={onMouseEnterFilmHandler}
      onMouseLeave={onMouseLeaveFilmHandler}
      className="small-film-card catalog__films-card"
    >
      {
        !isActive ?
          <>
            <div className="small-film-card__image">
              <img src={film.preview_image} alt={film.name} width="280" height="175"/>
            </div>
            <h3 className="small-film-card__title">
              <Link className="small-film-card__link" to={`/films/${film.id}`}>
                <p className="small-film-card__link">{film.name}</p>
              </Link>
            </h3>
          </>
          :
          <VideoPlayer film={film}/>
      }
    </article>
  );
}

export default FilmCard;
