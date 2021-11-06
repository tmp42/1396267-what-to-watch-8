import {Comments} from '../../types/comments';
import CommentsFilmList from '../comments-film-list/comments-film-list';

type FilmReviewsProps = {
  comments: Comments[]
}

function FilmReviews({comments}: FilmReviewsProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <CommentsFilmList comments={comments}/>
    </div>
  );
}

export default FilmReviews;
