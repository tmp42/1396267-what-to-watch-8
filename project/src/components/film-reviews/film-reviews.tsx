import {Comment} from '../../types/comments';
import CommentsFilm from '../comments-film/comments-film';

type FilmReviewsProps={
  comments: Comment
}
function FilmReviews({comments}: FilmReviewsProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        <CommentsFilm comments={comments}/>
      </div>
    </div>
  );
}

export default FilmReviews;
